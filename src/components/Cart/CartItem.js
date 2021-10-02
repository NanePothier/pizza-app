import React from "react";
import ConfirmButton from "../UI/ConfirmButton";
import classes from "./CartItem.module.css";

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
      <ConfirmButton
        btnTitle="Remove"
        disabled={false}
        onClick={removePizzaHandler}
      />
    </li>
  );
};

export default CartItem;
