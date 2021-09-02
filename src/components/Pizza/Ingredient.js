import React from 'react';
import classes from './Ingredient.module.css';

const Ingredient = (props) => {
  let ingClasses;

  const ingredient = props.pizzaIngArray.find((ing) => {
    return props.id === ing.id;
  });

  if (!ingredient) {
    ingClasses = `${classes.ingredient}`;
  } else {
    ingClasses = `${classes.ingredient} ${classes.highlight}`;
  }

  const selectIngredientHandler = () => {
    props.selectIngredient(props.id);
  };

  return (
    <li className={ingClasses} onClick={selectIngredientHandler}>
      <img src={props.image} alt={props.altText} />
      <div className={classes.title}>{props.name}</div>
      <div>{props.price === 0 ? '' : `+ $${props.price}`}</div>
    </li>
  );
};

export default Ingredient;
