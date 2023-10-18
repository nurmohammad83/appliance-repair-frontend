"use server";

import { revalidateTag } from "next/cache";

export const createReview = async (data: any) => {
  const res = await fetch(`http://localhost:4000/api/v1/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const { data: reviews } = await res.json();
  revalidateTag("all-reviews");
  return reviews;
};
