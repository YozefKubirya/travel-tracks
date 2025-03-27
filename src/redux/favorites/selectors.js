export const selectFavorites = (state) => state.favorites.items || [];

export const isFavorite = (id) => (state) =>
   state.favorites.items.includes(id);