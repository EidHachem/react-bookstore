import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../Styles/Button.module.css';

export default function Button(props) {
  const {
    content, onClick, onSubmit, margin,
  } = props;
  const submit = 'submit';
  const Click = 'onClick';
  const Submit = 'onSubmit';
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={classes.btn}
      style={{ margin }}
      onClick={Click ? onClick : ''}
      onSubmit={Submit ? onSubmit : ''}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  margin: PropTypes.string.isRequired,
};
