// import { IMeta } from "@/types";
// import { tagTypes } from "../tag-types";
// import { baseApi } from "./baseApi";

// export const scheduleApi = baseApi.injectEndPoints({
//     endPoints: (build) =>({
//         createSchedule: build.mutation({
//             query: (data)=>({
//                 url: "/schedule",
//                 methos: "POST",
//                 data,
//             }),
//             invalidationTags:[tagTypes.schedule],
//         }),
//         getAllSchedules: build.query({
//             query:(arg: Record<string, any>)=>{
//                 return{
//                     url: "/schedule",
//                     method: "Get",
//                     params: arg,
//                 };
//             },
//             transfromResponse: (response: [], meta: IMeta)=>{
//                 return{
//                     schedules: response,
//                     meta,
//                 };
//             }
//         }),

//         deleteSchedule: build.mutation({
//             query: (id)=>({
//                 url: `/schedule/${id},`,
//                 method: "DELETE",
//             }),
//             invalidatesTags: [tagTypes.schedule],
//         })
//     })
// });

// export const {
//     useCreateScheduleMutation,
//     useGetAllSchedulesQuery,
//     useDeleteScheduleMutation,
// } = scheduleApi

import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";

export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
    getAllSchedules: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/schedule",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          schedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),

    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllSchedulesQuery,
  useDeleteScheduleMutation,
} = scheduleApi;
