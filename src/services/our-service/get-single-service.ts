"use server";

export const getSingleService = async (id: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/services/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const { data } = await res.json();
  return data;
};
