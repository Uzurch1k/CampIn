export const selectCamps = state => state.camps.items;

export const selectCampsLoading = state => state.camps.loading;

export const selectCampsError = state => state.camps.error;

export const selectCurrentPage = state => state.camps.currentPage;

export const selectItemsPerPage = state => state.camps.itemsPerPage;

export const selectFavorites = state => state.camps.favorites;

// Селектор для відбору оголошень на поточній сторінці
export const selectPaginatedCamps = state => {
  const camps = selectCamps(state);
  const currentPage = selectCurrentPage(state);
  const itemsPerPage = selectItemsPerPage(state);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return camps.slice(startIndex, endIndex);
};

// Селектор для відбору улюблених оголошень
export const selectFavoriteCamps = state => {
  const camps = selectCamps(state);
  const favorites = selectFavorites(state);

  return camps.filter(camp => favorites.includes(camp.id));
};
