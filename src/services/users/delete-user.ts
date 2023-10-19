"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { IUser } from "@/types/common";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const deleteUser = async (id: string): Promise<IUser> => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // @ts-ignore
      Authorization: `${session?.accessToken}`,
    },
  });
  revalidateTag("all-users");
  const { data } = await res.json();
  console.log(data);
  return data;
};
