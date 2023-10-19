"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { IBooking } from "@/types/common";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const createBooking = async (data: IBooking): Promise<IBooking> => {
  console.log(data, "book data");
  const session = await getServerSession(authOptions);
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // @ts-ignore
      Authorization: `${session?.accessToken}`,
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  revalidateTag("all-bookings");
  const { data: booking } = await res.json();
  return booking;
};
