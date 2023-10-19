"use server";

import { IUser } from "@/types/common";
import { revalidateTag } from "next/cache";

export const getSingleUser = async (id: string): Promise<IUser> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/users/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  revalidateTag("all-users");
  const { data } = await res.json();
  return data;
};
