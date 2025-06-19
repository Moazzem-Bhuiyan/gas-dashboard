const { baseApi } = require('./baseApi');

const withdrawApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWithdrawRequest: builder.query({
      query: () => ({
        url: '/withdrawal',
        method: 'GET',
      }),
      providesTags: ['withdraw'],
    }),
    withdrawRequest: builder.mutation({
      query: (data) => ({
        url: '/withdraw/request',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['withdraw'],
    }),
  }),
});
export const { useGetWithdrawRequestQuery, useWithdrawRequestMutation } = withdrawApi;
