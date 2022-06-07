import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import Button from './UI/Button';
import classes from '../Styles/Book.module.css';

export default function Book() {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id));
  };

  if (!books) return <p>No Books Available</p>;

  return (
    <>
      {books.map((book) => (
        <div className={classes.book} key={book.id}>
          &quot;
          {book.title}
          &quot; &nbsp; by &nbsp;
          {book.author}
          <Button content="Remove" onClick={() => deleteBookHandler(book.id)} />
        </div>
      ))}
    </>
  );
}
