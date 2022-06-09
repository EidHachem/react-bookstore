import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

const options = {
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    checkStatus: () => ('Under Construction'),
  },
};

const categoriesReducer = createSlice(options);
export const { checkStatus } = categoriesReducer.actions;

export default categoriesReducer.reducer;
