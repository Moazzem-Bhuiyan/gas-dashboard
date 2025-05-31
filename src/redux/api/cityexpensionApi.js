import { baseApi } from './baseApi';

const CityExpensionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCityExpension: builder.query({
      query: () => ({
        url: `/cityExpansion`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCityExpensionQuery } = CityExpensionApi;
