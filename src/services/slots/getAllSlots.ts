"use server";

import { ISlot } from "@/types/common";

export const getAllSlots = async (): Promise<ISlot[]> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/slots`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
