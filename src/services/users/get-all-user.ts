"use server";

import { IUser } from "@/types/common";

export const getAllUser = async (): Promise<IUser[]> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
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
