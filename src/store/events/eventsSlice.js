import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
// import { createSelector } from 'reselect';

import * as eventsApi from '../../api/eventsApi';
import * as eventsHandlers from './eventsHandlers';

const initialState = {
  items: [],
  hasMorePages: false,
  totalItems: '',
  isLoading: false,
  error: '',
  sorting: {
    sortField: '',
    sortDirection: '',
  },
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,

  reducers: creator => ({
    setFiltersAction: creator.reducer(eventsHandlers.handleSetSorting),

    clearFiltersAction: creator.reducer(eventsHandlers.handleClearSorting),

    getEventsAction: creator.asyncThunk(
      async (params, { rejectWithValue }) => {
        try {
          const data = await eventsApi.getEvents(params);

          return data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: eventsHandlers.handlePending,
        fulfilled: eventsHandlers.handleGetEvents,
        rejected: eventsHandlers.handleRejected,
      }
    ),

    getMoreEventsAction: creator.asyncThunk(
      async (params, { rejectWithValue }) => {
        try {
          const data = await eventsApi.getEvents(params);

          return data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: eventsHandlers.handlePending,
        fulfilled: eventsHandlers.handleGetMoreEvents,
        rejected: eventsHandlers.handleRejected,
      }
    ),
  }),

  selectors: {
    selectEvents: eventsHandlers.handleEvents,
    selectIsLoading: eventsHandlers.handleIsLoading,
    selectError: eventsHandlers.handleError,
    selectSorting: eventsHandlers.handleSorting,
    selectHasMorePages: eventsHandlers.handleHasMorePages,
    selectTotalItems: eventsHandlers.handleTotalItems,
  },
});

export const eventsReducer = eventsSlice.reducer;

export const eventsActions = eventsSlice.actions;
export const eventsSelectors = eventsSlice.selectors;
