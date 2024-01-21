import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  items: [],
  //   isLoading: false,
  //   error: null,
};

const slice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    // addFavorite(s, a) {
    //   s.items.push(a.payload.advert);
    // },
    // removeFavorite(s, a) {
    //   s.items = s.items.filter(item => item.id !== a.payload.advert.id);
    // },
    addFavorite: (state, action) => {
      state.items.push(action.payload.advert);
    },
    removeFavorite: (state, action) => {
      const carToRemove = action.payload.advert;
      state.items = state.items.filter(item => item.id !== carToRemove.id);
    },
  },
});

export const { addFavorite, removeFavorite } = slice.actions;
export const favoritesReducer = slice.reducer;
