import { createSlice } from '@reduxjs/toolkit';
import { fetchCounterValue } from './api'; // A fictional API module

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounterValue.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

export const fetchCounter = () => {
  return async (dispatch) => {
    try {
      const value = await fetchCounterValue(); // Call the API to fetch the counter value
      dispatch(fetchCounterValue.fulfilled(value));
    } catch (error) {
      // Handle error
    }
  };
};