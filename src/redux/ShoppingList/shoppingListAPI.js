// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://so-yummy-app-backend.onrender.com/api/';

// export const deleteIngrid = createAsyncThunk(
//   'shoppingList/deleteIngrid',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/shoppingList/${contactId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// )

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shoppingListAPI = createApi({
  reducerPath: 'shoppingListAPI',
  tagTypes: ['ingridients'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://so-yummy-app-backend.onrender.com/api/',

  }),
  endpoints: builder => ({
    fetchIngridients: builder.query({
      query: () => 'shopping-list',
      providesTags: ['Shopping-list']
    }),
   addIngridients: builder.mutation({
      query: newIngridients => ({
        url: `shopping-list`,
        method: 'POST',
        body: newIngridients,
      }),
      invalidatesTags: ['Ingridients']
    }),
    deleteIngridients: builder.mutation({
      query: Id => ({
        url: `shopping-list/${Id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Ingridients'],
    })
  })
})

export const {
  useFetchIngridientsQuery,
  useAddIngridientsMutation,
  useDeleteIngridientsMutation
} = shoppingListAPI