"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { IUser } from "@/types/common";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const deleteBooking = async (id: string): Promise<IUser> => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // @ts-ignore
      Authorization: `${session?.accessToken}`,
    },
  });
  revalidateTag("all-bookings");
  const { data } = await res.json();
  return data;
};
