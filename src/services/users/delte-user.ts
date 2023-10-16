"use server";

import { revalidateTag } from "next/cache";

export const deleteUser = async (id: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/users/${id}`, {
    method: "DELETE",
  });
  const { data } = await res.json();
  revalidateTag("all-users");
};
