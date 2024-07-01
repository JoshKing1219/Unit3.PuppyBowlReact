import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",

  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT/",
  }),

  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "/",

      providesTags: ["players"],
    }),

    addPlayer: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),

      invalidatesTags: ["players"],
    }),

    updatePlayer: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),

      invalidatesTags: ["players"],
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useAddPlayerMutation,
  useUpdatePlayerMutation,
} = puppyBowlApi;
