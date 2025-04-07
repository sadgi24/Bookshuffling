import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  { id: '1', title: 'The Alchemist', author: 'Paulo Coelho', status: null },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', status: null },
  { id: '3', title: '1984', author: 'George Orwell', status: null },
  { id: '4', title: 'Pride and Prejudice', author: 'Jane Austen', status: null },
  { id: '5', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: null },
  { id: '6', title: 'Moby Dick', author: 'Herman Melville', status: null },
  { id: '7', title: 'War and Peace', author: 'Leo Tolstoy', status: null },
  { id: '8', title: 'Ulysses', author: 'James Joyce', status: null },
  { id: '9', title: 'The Hobbit', author: 'J.R.R. Tolkien', status: null },
  { id: '10', title: 'Jane Eyre', author: 'Charlotte Bronte', status: null },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    changeStatus: (state, action) => {
      const { id, status } = action.payload;
      const book = state.find(b => b.id === id);
      if (book) book.status = status;
    },
    removeStatus: (state, action) => {
      const book = state.find(b => b.id === action.payload);
      if (book) book.status = null;
    },
  },
});

export const { changeStatus, removeStatus } = booksSlice.actions;
export default booksSlice.reducer;