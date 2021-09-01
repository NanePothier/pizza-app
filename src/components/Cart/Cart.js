import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const pizzaItems = cartCtx.pizzaItems.map((pizza) => {
    return (
      <CartItem
        key={pizza.id}
        ingredients={pizza.ingredients}
        totalPrice={pizza.totalPrice}
      />
    );
  });
  const totalAmount = ` $${cartCtx.totalAmount}`;

  return (
    <Modal onClose={props.onHideCart}>
      <div className={classes.heading}>Your current order:</div>
      <section className={classes.summary}>
        <ul>{pizzaItems}</ul>
      </section>
      <div>Total amount for this order: {totalAmount}</div>
      <div className={classes.buttons}>
        <button>Close</button>
        <button>Checkout</button>
      </div>
    </Modal>
  );
};

export default Cart;
