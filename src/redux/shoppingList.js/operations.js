import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getShoppingList = createAsyncThunk(
  'shoppingList/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/shopping-list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  'shopppingList/addIngredient',
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.post('/shopping-list', ingredient);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromShoppingList = createAsyncThunk(
  'shoppingList/deleteIngredient',
  async (ingredientId, thunkAPI) => {
    try {
      const response = await axios.delete(`/shopping-list/${ingredientId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
