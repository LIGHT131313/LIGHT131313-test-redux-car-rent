import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://651e7e7744a3a8aa47687673.mockapi.io/api/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async ({ value = '', page = 1, limit = 12 }, thunkAPI) => {
    const params = new URLSearchParams({
      make: value,
      page,
      limit,
    });

    try {
      const { data } = await axios.get(`/adverts?${params}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
