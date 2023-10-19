"use server";

import { IReviewAndRating } from "@/types/common";

export const getAllReviews = async (): Promise<IReviewAndRating[]> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["all-reviews"],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
