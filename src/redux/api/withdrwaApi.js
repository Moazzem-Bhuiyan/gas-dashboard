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
    updateWithdrawRequest: builder.mutation({
      query: ({ id, data }) => ({
        url: `/withdrawal/update/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['withdraw'],
    }),
  }),
});
export const { useGetWithdrawRequestQuery, useUpdateWithdrawRequestMutation } = withdrawApi;
