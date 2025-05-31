import { baseApi } from './baseApi';

const driversApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetDriverData: builder.query({
      query: () => ({
        url: `/driverearnings/summary`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDriverDataQuery } = driversApi;
