// redux/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { data } from '../api/data';

const initialState = {
  books: data,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    shuffleBooks: (state) => {
      state.books = state.books
        .map((book) => ({ book, sort: Math.random() })) 
        .sort((a, b) => a.sort - b.sort) 
        .map(({ book }) => book);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBookStatus: (state, action) => {
      const { id, status } = action.payload;
      const book = state.books.find((book) => book.id === id);
      if (book) {
        book.status = status;
      }
    },
  },
});

export const { shuffleBooks, deleteBook, updateBookStatus } = bookSlice.actions;
export default bookSlice.reducer;
