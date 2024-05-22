import {
  buildCreateSlice,
  asyncThunkCreator,
  createSelector,
} from '@reduxjs/toolkit';
// import { createSelector } from 'reselect';

import * as participantsApi from '../../api/participantsApi';
import * as participantsHandlers from './participantsHandlers';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
  filter: '',
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const participantsSlice = createSlice({
  name: 'participants',
  initialState,

  reducers: creator => ({
    setFilterAction: creator.reducer(participantsHandlers.handleSetFilter),

    clearFilterAction: creator.reducer(participantsHandlers.handleClearFilter),

    getParticipantsAction: creator.asyncThunk(
      async (eventId, { rejectWithValue }) => {
        try {
          const data = await participantsApi.getParticipants(eventId);

          return data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: participantsHandlers.handlePending,
        fulfilled: participantsHandlers.handleGetParticipants,
        rejected: participantsHandlers.handleRejected,
      }
    ),

    addParticipantAction: creator.asyncThunk(
      async (payload, { rejectWithValue }) => {
        try {
          const data = await participantsApi.addParticipant(payload);

          return data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: participantsHandlers.handlePending,
        fulfilled: participantsHandlers.handleAddParticipant,
        rejected: participantsHandlers.handleRejected,
      }
    ),
  }),

  selectors: {
    selectParticipants: participantsHandlers.handleParticipants,
    selectIsLoading: participantsHandlers.handleIsLoading,
    selectError: participantsHandlers.handleError,
    selectFilter: participantsHandlers.handleFilter,

    selectFilteredParticipants: createSelector(
      [
        participantsHandlers.handleParticipants,
        participantsHandlers.handleFilter,
      ],
      (items, filter) => {
        return items.filter(
          ({ full_name, email }) =>
            full_name.toLowerCase().includes(filter.toLowerCase()) ||
            email.toLowerCase().includes(filter.toLowerCase())
        );
      }
    ),
  },
});

export const participantsReducer = participantsSlice.reducer;

export const participantsActions = participantsSlice.actions;
export const participantsSelectors = participantsSlice.selectors;
