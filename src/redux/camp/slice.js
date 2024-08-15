import { createSlice } from '@reduxjs/toolkit';
import { fetchCamp } from './operations';
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
      const camp = state.items.find(item => item._id === campId);
      if (!camp) return;

      const index = state.favorites.findIndex(item => item._id === camp._id);

      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(camp);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamp.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentPage === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
      })

      .addMatcher(isPending, campsPending)
      .addMatcher(isRejected, campsRejected);
  },
});

export const { setPage, toggleFavorite } = campsSlice.actions;

export const campsReducer = campsSlice.reducer;
