import React from 'react';
import classes from '../../Styles/Button.module.css';

export default function Button(props) {
  return <button className={classes.btn}>{props.content}</button>;
}
