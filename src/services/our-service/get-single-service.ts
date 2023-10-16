"use server";

export const singleService = async (id: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/services/${id}`, {
    method: "GET",
  });
  const { data } = await res.json();
  return data;
};
