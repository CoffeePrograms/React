import { createSlice } from '@reduxjs/toolkit';

interface ApiResponse {
  data: { fact: string; length: number }[];
  error: string | null;
}

const initialState: ApiResponse = {
  data: [],
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setError } = apiSlice.actions;

export default apiSlice.reducer;
