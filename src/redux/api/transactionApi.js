import { baseApi } from './baseApi';

const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetTransectionData: builder.query({
      query: () => ({
        url: `/payments?isPaid=true`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTransectionDataQuery } = transactionApi;
