import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../Styles/Form.module.css';
import Button from './UI/Button';
import { addBook } from '../redux/books/books';

export default function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: Math.random() * 100,
        title,
        author,
      }),
    );
    setTitle('');
    setAuthor('');
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <h2>Add A Book</h2>
      <form className={classes.form} onSubmit={addBookHandler}>
        <input
          className={classes.title}
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={titleChangeHandler}
        />
        <input
          className={classes.author}
          type="text"
          placeholder="Enter book author"
          value={author}
          onChange={authorChangeHandler}
        />
        <Button content="Add Book" type="submit" />
      </form>
    </>
  );
}
