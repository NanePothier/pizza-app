import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const ingredients = props.ingredients.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.name}</li>;
  });

  return (
    <li className={classes.item}>
      <div>
        <span>Pizza:</span>
        <span className={classes.total}>{`$${props.totalPrice}`}</span>
      </div>
      <ul>{ingredients}</ul>
    </li>
  );
};

export default CartItem;
