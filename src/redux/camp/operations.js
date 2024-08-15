import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axiosBase';

export const fetchCamp = createAsyncThunk(
  'camps/fetchCamp',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/campin?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
