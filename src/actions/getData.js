"use server";

export const getData = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_APP_BACKEND_DB, {
    cache: "no-store",
  });
  const { data } = await response.json();

  return data;
};
