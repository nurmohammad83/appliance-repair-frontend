"use server";

import { ICategory } from "@/types/common";

export const singleCategory = async (id: string): Promise<ICategory> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/categories/${id}`, {
    method: "GET",
  });
  const { data } = await res.json();
  return data;
};
