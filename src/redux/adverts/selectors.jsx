// import { createSelector } from '@reduxjs/toolkit';

export const selectStore = s => s.adverts;
export const selectAdverts = s => s.adverts.items;
export const selectIsLoading = s => s.adverts.isLoading;
export const selectError = s => s.adverts.error;
export const selectPage = s => s.adverts.page;
export const selectPageLimit = s => s.adverts.pageLimit;
export const selectFavorites = s => s.favorites.items;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
