import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  pageLimit: 12,
};

const slice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  reducers: {
    setPage: (s, a) => {
      s.page = a.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, s => {
        s.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (s, a) => {
        s.isLoading = false;
        s.error = null;
        if (s.page > 1) {
          s.items = [...s.items, ...a.payload];
        } else {
          s.items = a.payload;
        }
      })
      .addCase(fetchAdverts.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.payload;
      });
  },
});
export const { setPage } = slice.actions;
export const advertsReducer = slice.reducer;
