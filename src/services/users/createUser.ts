"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (data: any) => {
  const res = await fetch(`http://localhost:4000/api/v1/users/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const { data: userData } = await res.json();
  revalidateTag("all-users");
  redirect(`/all-services`);
};
