import { baseApi } from './baseApi';

const CheckListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CreateNewQuestion: builder.mutation({
      query: (data) => ({
        url: '/questions/create',
        method: 'POST',
        body: data,
      }),
    }),
    getAllCheckListdata: builder.query({
      query: ({ limit, page, searchText }) => ({
        url: `/questions?limit=${limit}&page=${page}&searchTerm=${searchText}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateNewQuestionMutation, useGetAllCheckListdataQuery } = CheckListApi;
