export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleGetParticipants = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload.participants;
  state.error = '';
};

export const handleAddParticipant = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = '';
};

export const handleSetFilter = (state, { payload }) => {
  state.filter = payload;
};

export const handleClearFilter = state => {
  state.filter = '';
};

export const handleParticipants = state => state.items;
export const handleIsLoading = state => state.isLoading;
export const handleError = state => state.error;
export const handleFilter = state => state.filter;
