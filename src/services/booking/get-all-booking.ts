"use server";

export const getAllBookings = async (): Promise<any> => {
  const res = await fetch(`http://localhost:4000/api/v1/bookings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // next: {
    //   revalidate: 24 * 60 * 60,
    //   tags: ["all-category"],
    // },
  });
  const { data } = await res.json();
  console.log(data);
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
