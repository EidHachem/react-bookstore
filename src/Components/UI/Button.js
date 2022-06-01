import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../Styles/Button.module.css';

export default function Button(props) {
  const { content } = props;
  const submit = 'submit';
  return (
    <button type={submit ? 'submit' : 'button'} className={classes.btn}>
      {content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};
