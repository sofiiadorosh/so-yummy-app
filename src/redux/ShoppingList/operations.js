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