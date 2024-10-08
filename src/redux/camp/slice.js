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

      const index = state.favorites.findIndex(item => item._id === campId);

      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        const camp = state.items.find(item => item._id === campId);
        if (camp) {
          state.favorites.push(camp);
        }
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamp.fulfilled, (state, action) => {
        state.loading = false;
        const newItems = action.payload.filter(
          newItem =>
            !state.items.some(existingItem => existingItem._id === newItem._id)
        );

        state.items = [...state.items, ...newItems];
      })

      .addMatcher(isPending, campsPending)
      .addMatcher(isRejected, campsRejected);
  },
});

export const { setPage, toggleFavorite } = campsSlice.actions;

export const campsReducer = campsSlice.reducer;
