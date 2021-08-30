import React from 'react';
import classes from './Ingredient.module.css';

const Ingredient = (props) => {
  let ingClasses;

  const ingredient = props.pizzaIngArray.find((ing) => {
    return props.id === ing.id;
  });

  if (!ingredient) {
    console.log('ing is not in pizza state');
    ingClasses = `${classes.ingredient}`;
  } else {
    ingClasses = `${classes.ingredient} ${classes.highlight}`;
  }

  const selectIngredientHandler = () => {
    props.selectIngredient(props.id);
  };

  return (
    <li className={ingClasses} onClick={selectIngredientHandler}>
      <h3>{props.name}</h3>
      <div>{props.price === 0 ? '' : `+ $${props.price}`}</div>
    </li>
  );
};

export default Ingredient;
