import instance from 'redux/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const token = localStorage.getItem('accessToken');
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getOwnRecipes = createAsyncThunk(
  'ownRecipes/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/ownRecipes');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToOwnRecipes = createAsyncThunk(
  'ownRecipes/addRecipe',
  async (recipe, thunkAPI) => {
    try {
      const response = await instance.post('/ownRecipes', recipe);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromOwnRecipes = createAsyncThunk(
  'ownRecipes/deleteRecipe',
  async (recipeId, thunkAPI) => {
    try {
      const response = await instance.delete(`/ownRecipes/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllIngredients = createAsyncThunk(
  'ingredients/list',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/ingredients/list');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);