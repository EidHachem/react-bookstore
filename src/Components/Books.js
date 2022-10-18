import React from 'react';
import Book from './Book';
import Form from './Form';
import classes from '../Styles/Books.module.css';

export default function Books() {
  return (
    <section className={classes.main}>
      <Book />
      <Form />
    </section>
  );
}
