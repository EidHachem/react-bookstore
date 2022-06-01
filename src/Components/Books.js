import React from 'react';
import Book from './Book';
import Form from './Form';
import classes from '../Styles/Books.module.css';

export default function Books() {
  const bookList = [
    {
      title: 'For one more day',
      author: 'Mitch Albom',
      id: 1,
    },
    {
      title: 'Origin Story',
      author: 'David Christian',
      id: 2,
    },
  ];

  return (
    <section className={classes.main}>
      <Book data={bookList} />
      <Form />
    </section>
  );
}
