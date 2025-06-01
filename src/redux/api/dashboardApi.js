import { baseApi } from './baseApi';

const dashBoardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardUserData: builder.query({
      query: () => ({ url: `/payments/dashboard-data?role=user`, method: 'GET' }),
    }),
    getDashboardDriverData: builder.query({
      query: () => ({ url: `/payments/dashboard-data?role=driver`, method: 'GET' }),
    }),
  }),
});

export const { useGetDashboardUserDataQuery, useGetDashboardDriverDataQuery } = dashBoardApi;
