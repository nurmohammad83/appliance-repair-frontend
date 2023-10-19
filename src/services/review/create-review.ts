"use server";

import { getServerSession } from "next-auth";
import { IReviewAndRating } from "@/types/common";
import { revalidateTag } from "next/cache";
import { authOptions } from "@/app/lib/AuthOptions";

export const createReview = async (
  data: IReviewAndRating
): Promise<IReviewAndRating> => {
  console.log(data);
  const session = await getServerSession(authOptions);
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // @ts-ignore
      Authorization: `${session?.accessToken}`,
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  revalidateTag("all-reviews");
  const { data: reviews } = await res.json();
  console.log(reviews);
  return reviews;
};
