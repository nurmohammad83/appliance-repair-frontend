"use server";

import { IUser } from "@/types/user";

export const getAllCategories = async (): Promise<any> => {
  const res = await fetch(`http://localhost:4000/api/v1/categories`, {
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
