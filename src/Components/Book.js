import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Button from './UI/Button';
import classes from '../Styles/Book.module.css';

export default function Book() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBookHandler = (id) => {
    dispatch(removeBook(id));
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
          &nbsp;
          {book.category}
          <Button content="Remove" onClick={() => deleteBookHandler(book.id)} />
        </div>
      ))}
    </>
  );
}
