import { baseApi } from './baseApi';

const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: ({ limit, page, searchText, orderType }) => ({
        url: `/orders?limit=${limit}&page=${page}&searchTerm=${searchText}&orderType=${orderType}`,
        method: 'GET',
      }),
    }),
    // get single order

    getSingleOrders: builder.query({
      query: ({ id }) => ({
        url: `/orders/${id}`,
        method: 'GET',
      }),
    }),

    updateOrderStatus: builder.mutation({
      query: ({ orderId, driverid, status }) => ({
        url: `/orders/update/${orderId}`,
        method: 'PATCH',
        body: {
          orderStatus: status,
          driverId: driverid,
        },
      }),
    }),
  }),
});

export const { useGetAllOrdersQuery, useUpdateOrderStatusMutation, useGetSingleOrdersQuery } =
  OrderApi;
