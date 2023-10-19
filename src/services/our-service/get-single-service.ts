"use server";

import { IService } from "@/types/common";

export const getSingleService = async (id: string): Promise<IService> => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/services/${id}`, {
    method: "GET",
  });
  const { data } = await res.json();
  return data;
};
