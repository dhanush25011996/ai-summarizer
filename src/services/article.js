import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the articleApi using createApi

const rapidApiKey = '0b21928ec5mshb0f3e0b96403ff0p19ddd9jsnc0593b5513dd'

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://article-extractor-and-summarizer.p.rapidapi.com/`,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
