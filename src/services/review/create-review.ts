"use server";

import { IReviewAndRating } from "@/types/common";
import { revalidateTag } from "next/cache";

export const createReview = async (
  data: IReviewAndRating
): Promise<IReviewAndRating> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  revalidateTag("all-reviews");
  const { data: reviews } = await res.json();
  return reviews;
};
