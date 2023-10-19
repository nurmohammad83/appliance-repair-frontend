"use server";

import { IService } from "@/types/common";

export const getAllServices = async (): Promise<IService[]> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/services`, {
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
