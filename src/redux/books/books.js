/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: 'For one more day',
    author: 'Mitch Albom',
    category: 'fiction',
    id: 1,
  },
  {
    title: 'Origin Story',
    author: 'David Christian',
    category: 'fiction',
    id: 2,
  },
];

const options = {
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.push(payload);
    },
    deleteBook: (state, { payload }) => state.filter((book) => (book.id !== payload)),
  },
};

const booksReducer = createSlice(options);

export const { addBook, deleteBook } = booksReducer.actions;
export const selectBooks = (state) => state.books;
export default booksReducer.reducer;
