import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@component/server/api/trpc";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(3), 
      email: z.string().email({ message: "Invalid email address" }) , 
      password: z.string().min(6), 
      categories: z.array(z.object({name: z.string().min(3)}))
      }))
    .mutation(async ({ ctx, input }) => {       
      return await ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
          categories: {
            create: input.categories
          } 
        },
      });
    }),

  getUserByID: publicProcedure.input(z.object({id: z.number()})).query(async ({ctx, input}) => {
    return await ctx.db.user.findUnique({
      where: {
        id: input.id
      },
      include: {
        categories: true
      }
    })
  }),

  getUserByEmail: publicProcedure
    .input(z.object({email: z.string().email({ message: "Invalid email address" })}))
    .query(async ({ctx, input}) => {
      return await ctx.db.user.findUnique({
        where: {
          email: input.email
        }
      })
    }),

  addCategoryToUser: publicProcedure.input(z.object({id: z.number(), categoryName: z.string().min(3)})).mutation(async ({ctx, input}) => {
    const res = await ctx.db.user.findUnique({
      where: {
        id: input.id
      },
      include: {
        categories: true
      }
    });
    return await ctx.db.user.update({
      data: {
        categories: {
          set: [...res?.categories, { name: input.categoryName }]
        }
      },
      where: {
        id: input.id
      }
    })
  })

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.user.findFirst({
  //     orderBy: { createdAt: "desc" },
  //   });
  // }),
});
