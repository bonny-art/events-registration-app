export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleGetEvents = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload.events;
  state.hasMorePages = payload.hasMorePages;
  state.totalItems = payload.totalItems;
  state.error = '';
};

export const handleGetMoreEvents = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(...payload.events);
  state.hasMorePages = payload.hasMorePages;
  state.totalItems = payload.totalItems;
  state.error = '';
};

export const handleSetSorting = (state, { payload }) => {
  state.sorting = payload;
};

export const handleClearSorting = state => {
  state.sorting.sortField = '';
  state.sorting.sortDirection = '';
};

export const handleEvents = state => state.items;
export const handleIsLoading = state => state.isLoading;
export const handleError = state => state.error;
export const handleSorting = state => state.sorting;
export const handleHasMorePages = state => state.hasMorePages;
export const handleTotalItems = state => state.totalItems;
