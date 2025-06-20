import { baseApi } from './baseApi';

const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetTransectionData: builder.query({
      query: () => ({
        url: `/payments?isPaid=true`,
        method: 'GET',
      }),
    }),
    // refund transection
    refundTransection: builder.mutation({
      query: (id) => ({
        url: `payments/refund/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetTransectionDataQuery, useRefundTransectionMutation } = transactionApi;
