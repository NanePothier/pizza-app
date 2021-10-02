import React from 'react';
import Button from '../UI/Button';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const ingredients = props.ingredients.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.name}</li>;
  });

  const removePizzaHandler = () => {
    props.removePizza(props.id);
  };

  return (
    <li className={classes.item}>
      <div>
        <span>Pizza:</span>
        <span className={classes.total}>{`$${props.totalPrice}`}</span>
      </div>
      <ul>{ingredients}</ul>
      <div className={classes.remove}>
        <Button
          btnTitle="Remove"
          onClick={removePizzaHandler}
          btnClass="red small"
          disabled={false}
        />
      </div>
    </li>
  );
};

export default CartItem;
