import { baseApi } from './baseApi';

const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: ({ limit, page, searchText, orderType }) => ({
        url: `/orders?limit=${limit}&page=${page}&searchTerm=${searchText}&orderType=${orderType}`,
        method: 'GET',
      }),
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, status }) => ({
        url: `/orders/${orderId}`,
        method: 'PATCH',
        body: { status: status },
      }),
    }),
  }),
});

export const { useGetAllOrdersQuery, useUpdateOrderStatusMutation } = OrderApi;
