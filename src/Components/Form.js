import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../Styles/Form.module.css';
import Button from './UI/Button';
import { addBook } from '../redux/books/books';

export default function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: Math.random() * 100,
    title: '',
    author: '',
    category: '',
  });

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook(formData),
    );
    setFormData({
      id: Math.random() * 100,
      title: '',
      author: '',
      category: '',
    });
  };

  const changeHandler = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    setFormData((prevFormData) => (
      {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    ));
  };

  return (
    <>
      <h2>Add A Book</h2>
      <form className={classes.form} onSubmit={addBookHandler}>
        <input
          className={classes.title}
          type="text"
          placeholder="Enter book title"
          value={formData.title}
          name="title"
          onChange={changeHandler}
        />
        <input
          className={classes.author}
          type="text"
          placeholder="Enter book author"
          value={formData.author}
          name="author"
          onChange={changeHandler}
        />
        <input
          className={classes.category}
          type="text"
          placeholder="Enter book category"
          value={formData.category}
          name="category"
          onChange={changeHandler}
        />
        <Button content="Add Book" type="submit" />
      </form>
    </>
  );
}
