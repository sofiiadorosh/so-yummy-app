import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/operations';

export const getShoppingList = createAsyncThunk(
  'shoppingList/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/shopping-list');
      return response.data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  'shopppingList/addIngredient',
  async (ingredient, thunkAPI) => {
    try {
      const response = await instance.post('/shopping-list', ingredient);
      return response.data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromShoppingList = createAsyncThunk(
  'shoppingList/deleteIngredient',
  async (ingredientId, thunkAPI) => {
    try {
      const response = await instance.delete(`/shopping-list/${ingredientId}`);
      return response.data.ingredient;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
