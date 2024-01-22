import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  items: [],
  //   isLoading: false,
  //   error: null,
};

const slice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFavorite(s, a) {
      s.items.push(a.payload.advert);
    },
    removeFavorite(s, a) {
      s.items = s.items.filter(item => item.id !== a.payload.advert.id);
    },
  },
});

// export const { addFavorite, removeFavorite } = slice.actions;
export const filtersReducer = slice.reducer;
