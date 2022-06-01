import React from 'react';
import Button from './UI/Button';
import classes from '../Styles/Book.module.css';

export default function Book(props) {
  return (
    <div>
      {props.data.map((book) => {
        return (
          <div className={classes.book} key={book.id}>
            "{book.title}" by {book.author}
            <Button content="Remove" />
          </div>
        );
      })}
    </div>
  );
}
