const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'react-bookstore/books/DELETE_BOOK';

const INITIAL_STATE = [];

export default function booksReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat(action.payload);
    case DELETE_BOOK:
      return { ...state, payload: state.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function deleteBook(id) {
  return { type: DELETE_BOOK, payload: id };
}
