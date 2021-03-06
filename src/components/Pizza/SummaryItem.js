import React from 'react';
import classes from './SummaryItem.module.css';

const SummaryItem = (props) => {
  return <li className={classes.item}>{props.name}</li>;
};

export default SummaryItem;
