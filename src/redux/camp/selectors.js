export const selectCamps = state => state.camp.items;
export const selectFavorites = state => state.camp.favorites;

export const selectItemsPerPage = state => state.camp.itemsPerPage;
export const selectCurrentPage = state => state.camp.currentPage;

export const selectCampsLoading = state => state.camp.loading;
export const selectCampsError = state => state.camp.error;
