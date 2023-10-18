"use server";

export const getAllReviews = async (): Promise<any> => {
  const res = await fetch(`http://localhost:4000/api/v1/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      //   revalidate: 24 * 60 * 60,
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
