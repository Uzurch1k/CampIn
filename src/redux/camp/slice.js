import { createSlice } from '@reduxjs/toolkit';
import { fetchCamp, deleteCamp } from './operations';
import { INITIAL_STATE } from './initialState';

const isPending = action =>
  typeof action.type === 'string' && action.type.endsWith('/pending');
const isRejected = action =>
  typeof action.type === 'string' && action.type.endsWith('/rejected');

const campsPending = state => {
  state.loading = true;
  state.error = null;
};
const campsRejected = state => {
  state.loading = false;
  state.error = true;
};

const campsSlice = createSlice({
  name: 'camps',
  initialState: INITIAL_STATE,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggleFavorite: (state, action) => {
      const campId = action.payload;
      if (state.favorites.includes(campId)) {
        state.favorites = state.favorites.filter(id => id !== campId);
      } else {
        state.favorites.push(campId);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamp.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(deleteCamp.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(camp => camp.id !== action.payload.id);
      })
      .addMatcher(isPending, campsPending)
      .addMatcher(isRejected, campsRejected);
  },
});

export const { setPage, toggleFavorite } = campsSlice.actions;

export const campsReducer = campsSlice.reducer;
