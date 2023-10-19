"use server";
import { IUser } from "@/types/common";
import { revalidateTag } from "next/cache";

export const createUser = async (data: IUser): Promise<IUser> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/users/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const { data: userData } = await res.json();
  revalidateTag("all-users");
  return userData;
};
