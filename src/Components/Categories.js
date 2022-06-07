import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Button from './UI/Button';
import classes from '../Styles/Categories.module.css';

export default function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const checkinStatusHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <div className={classes.container}>
      <p className={classes.text}>{status}</p>
      <Button content="Check status" onClick={checkinStatusHandler} />
    </div>
  );
}
