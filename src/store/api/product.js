import { apiBase } from "./apiBase";

export const product = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query({
      query: (payload) => ({
        url: "fact",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetListQuery } = product;
