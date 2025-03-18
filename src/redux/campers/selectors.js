export const selectCampers = (state) => state.campers.items;

export const selectCurrentPage = (state) => state.campers.page;

export const selectItemsPerPage = (state) => state.campers.limit;

export const selectHasNextPage = (state) => state.campers.hasNextPage;

export const selectTotalItems = (state) => state.campers.totalItems;

export const selectTotalPages = (state) => state.campers.totalPages;