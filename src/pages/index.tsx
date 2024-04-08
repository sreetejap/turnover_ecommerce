import Head from "next/head";
import Link from "next/link";
import { faker } from "@faker-js/faker";

import { api } from "@component/utils/api";
import Paginated from "@component/components/paginated";

export default function Home() {
  const hello = api.users.hello.useQuery({ text: "Teja" });
  const getAllCats = api.categories.getAll.useQuery();
  const mutation = api.categories.create.useMutation();

  const createCategory = async () => {
    mutation.mutate({
      name: "mobiles",
      users: [
        { name: "Kyle", email: "test@gmail.com", password: "testpassword" },
      ],
    });
  };

  const fakecreatecategories = async () => {
    for (let i = 0; i < 100; i++) {
      mutation.mutate({ name: faker.commerce.department(), users: [] });
    }
  };

  const getAllCategories = () => {
    const res = getAllCats;
    console.log(res);
  };

  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Ecommerce for Turnover.biz" />
      </Head>
      <Paginated />
    </>
  );
}
