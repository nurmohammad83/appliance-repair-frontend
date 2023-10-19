"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { IUser } from "@/types/common";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
export const updateAdmin = async ({ id, values }: any): Promise<IUser> => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/users/${id.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // @ts-ignore
      Authorization: `${session!.accessToken}`,
    },
    body: JSON.stringify(values),
  });
  const { data: updateData } = await res.json();
  revalidateTag("all-users");
  return updateData;
};
