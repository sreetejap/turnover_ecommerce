import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@component/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(3), 
      users: z.array(z.object({name: z.string().min(3), email: z.string().email({ message: "Invalid email address" }), password: z.string().min(6)}))}))
    .mutation(async ({ ctx, input }) => {       
      return await ctx.db.category.create({
        data: {
          name: input.name,
          users: {
            create: input.users
          }
        },
      });
    }),

  getAll: publicProcedure.query(async ({ctx}) => {
        return await ctx.db.category.findMany()
    }),

  getByID: publicProcedure
    .input(z.object({id: z.number()})).query(async ({ctx, input}) => {
      return await ctx.db.category.findUnique({
        where: {
          id: input.id
        },
        include: {
          users: true
        }
      })
    })

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.user.findFirst({
  //     orderBy: { createdAt: "desc" },
  //   });
  // }),
});
