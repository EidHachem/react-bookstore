import React from 'react';
import PropTypes from 'prop-types';
import Button from './UI/Button';
import classes from '../Styles/Book.module.css';

export default function Book(props) {
  const { data } = props;
  return (
    <div>
      {data.map((book) => (
        <div className={classes.book} key={book.id}>
          &quot;
          {book.title}
          &quot; by &nbsp;
          {book.author}
          <Button content="Remove" />
        </div>
      ))}
    </div>
  );
}

Book.propTypes = {
  data: PropTypes.isRequired,
};
