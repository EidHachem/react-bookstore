import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { checkStatus } from '../redux/categories/categories';
import Button from './UI/Button';
import classes from '../Styles/Categories.module.css';

export default function Categories() {
  const status = useSelector((state) => state.categories);
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();
  const checkinStatusHandler = () => {
    dispatch(checkStatus());
    if (status && checked) {
      Swal.fire({
        title: 'Please try again later',
        icon: 'info',
        confirmButtonText: 'Ok',
      });
    }
    setChecked(true);
  };

  return (
    <div className={classes.container}>
      <p className={classes.text}>{status}</p>
      <Button content="Check status" onClick={checkinStatusHandler} margin="0" />
    </div>
  );
}
