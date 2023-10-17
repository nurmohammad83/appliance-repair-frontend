"use server";

export const singleCategory = async (id: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/categories/${id}`, {
    method: "GET",
  });
  const { data } = await res.json();
  return data;
};
