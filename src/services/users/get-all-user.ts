"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { IUser } from "@/types/common";
import { getServerSession } from "next-auth";

export const getAllUser = async (): Promise<IUser[]> => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // @ts-ignore
      Authorization: `${session?.accessToken}`,
    },
    next: {
      tags: ["all-users"],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
