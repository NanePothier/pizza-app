import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  let styles = props.btnClass;
  let btnClasses = '';

  if (styles.includes(' ')) {
    const index = styles.indexOf(' ');
    const first = styles.slice(0, index);
    const second = styles.slice(index + 1);
    btnClasses = `${classes[first]} ${classes[second]}`;
  } else {
    btnClasses = classes[styles];
  }

  return (
    <button
      className={btnClasses}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.btnTitle}
    </button>
  );
};

export default Button;
