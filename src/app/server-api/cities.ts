import { BASE_URL } from "@/config.server";
import { ICity, PaginatedResultApi } from "./types";
import { cookies } from "next/headers";

export const getCities = async (): Promise<PaginatedResultApi<ICity>> => {
  const token = (await cookies()).get("accessToken")?.value
  const res = await fetch(`${BASE_URL}/cities`, {
    headers:{
      authorization: `Bearer ${token}`
    },
    next: {
      tags: ["cities"],
    },
  }).then((res) => res.json());
  //   const cities=await res.json()
  console.log("cities", res);

  return res;
};
