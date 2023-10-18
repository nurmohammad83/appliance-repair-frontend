"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { getServerSession } from "next-auth";

export const getAllBookings = async (): Promise<any> => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`http://localhost:4000/api/v1/bookings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${session?.accessToken}`,
    },
    // next: {
    //   revalidate: 24 * 60 * 60,
    //   tags: ["all-category"],
    // },
  });
  const { data } = await res.json();
  console.log(data, "booking");
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
