import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carSlice = createApi({
  reducerPath: "cars",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/cars",
    }),
  }),
});

export const { useGetCarsQuery } = carSlice;
