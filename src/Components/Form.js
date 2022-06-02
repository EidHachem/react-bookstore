import React from 'react';
import classes from '../Styles/Form.module.css';
import Button from './UI/Button';

export default function Form() {
  return (
    <>
      <h2>Add A Book</h2>
      <form className={classes.form}>
        <input className={classes.title} type="text" placeholder="Enter book title" />
        <input className={classes.author} type="text" placeholder="Enter book author" />
        <Button content="Add Book" type="submit" />
      </form>
    </>
  );
}
