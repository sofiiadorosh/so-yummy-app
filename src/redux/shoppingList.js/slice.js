import { createSlice } from '@reduxjs/toolkit';
import {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
} from './operations';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getShoppingList.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(getShoppingList.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(getShoppingList.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(addToShoppingList.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(addToShoppingList.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(addToShoppingList.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(deleteFromShoppingList.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteFromShoppingList.fulfilled, (state, action) => {
        return {
          ...state,
          items: state.items.filter(
            ingredient => ingredient.id !== action.payload.id
          ),
          isLoading: false,
          error: null,
        };
      })
      .addCase(deleteFromShoppingList.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      }),
});

export const shoppingListReducer = shoppingListSlice.reducer;
