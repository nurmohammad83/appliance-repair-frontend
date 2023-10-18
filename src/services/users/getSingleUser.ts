"use server";

import { IUser } from "@/types/user";

export const getSingleUser = async (email: string): Promise<IUser> => {
  const res = await fetch(`http://localhost:4000/api/v1/users/${email}`, {
    method: "GET",
  });
  const { data } = await res.json();
  return data;
};
