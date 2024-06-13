import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.specialties],
    }),
    getaAllSpecialties: build.query({
      query: () => ({
        url: "/specialties",
        method: "Get",
      }),
      providesTags: [tagTypes.specialties],
    }),
  }),
});

export const { useCreateSpecialtyMutation, useGetaAllSpecialtiesQuery } =
  specialtiesApi;
