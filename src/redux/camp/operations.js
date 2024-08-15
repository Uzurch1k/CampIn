import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axiosBase';

export const fetchCamp = createAsyncThunk(
  'camps/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/campin');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCamp = createAsyncThunk(
  'camps/deleteCamp',
  async (campId, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/campin/${campId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
