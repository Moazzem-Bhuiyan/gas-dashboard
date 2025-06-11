import { baseApi } from './baseApi';

const adminProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetAdminProfile: builder.query({
      query: () => ({
        url: `/users/my-profile`,
        method: 'GET',
      }),
      providesTags: ['adminProfile'],
    }),
  }),
});

export const { useGetAdminProfileQuery } = adminProfileApi;
