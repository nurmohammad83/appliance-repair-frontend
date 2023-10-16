"use server";

import { IUser } from "@/types/user";

export const getAllServices = async (
  query: Record<string, unknown>
): Promise<IUser[]> => {
  const queryParams = ["searchTerm", "fullName"];
  const filteredQuery = Object.keys(query).reduce((acc, key) => {
    if (queryParams.includes(key)) {
      acc[key] = query[key];
    }
    return acc;
  }, {} as Record<string, unknown>);
  const queryString = Object.keys(filteredQuery)
    .reduce((acc, key) => {
      acc.push(`${key}=${filteredQuery[key]}`);
      return acc;
    }, [] as string[])
    .join("&");
  const res = await fetch(
    `http://localhost:4000/api/v1/services?${queryString}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 24 * 60 * 60,
        tags: ["all-users"],
      },
    }
  );
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
