"use server";

import { ICategory } from "@/types/common";

export const getAllCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/categories`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 24 * 60 * 60,
      tags: ["all-category"],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
