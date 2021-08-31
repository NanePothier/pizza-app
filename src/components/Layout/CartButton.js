import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numCartItems = cartCtx.pizzaItems.length;

  return (
    <button className={classes.button}>
      <span>Cart</span>
      <span className={classes['num-items']}>{numCartItems}</span>
    </button>
  );
};

export default CartButton;
