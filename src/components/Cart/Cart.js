import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Button from '../UI/Button';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removePizzaHandler = (id) => {
    cartCtx.removePizza(id);
  };

  const pizzaItems = cartCtx.pizzaItems.map((pizza) => {
    return (
      <CartItem
        key={pizza.id}
        id={pizza.id}
        ingredients={pizza.ingredients}
        totalPrice={pizza.totalPrice}
        removePizza={removePizzaHandler}
      />
    );
  });
  const totalAmount = ` $${cartCtx.totalAmount}`;
  const cartIsEmpty = cartCtx.pizzaItems.length === 0;

  const checkoutHandler = () => {};

  if (cartIsEmpty) {
    return (
      <Modal onClose={props.onHideCart}>
        <div className={classes.empty}>
          There are currently no items in the cart.
        </div>
        <div className={classes['empty-button']}>
          <Button
            btnTitle="Close"
            onClick={props.onHideCart}
            btnClass="white"
            disabled={false}
          />
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={props.onHideCart}>
      <div className={classes.heading}>Your order:</div>
      <section className={classes.summary}>
        <ol>{pizzaItems}</ol>
      </section>
      <div className={classes.total}>
        Total amount for this order: <span>{totalAmount}</span>
      </div>
      <div className={classes.buttons}>
        <Button
          btnTitle="Close"
          onClick={props.onHideCart}
          btnClass="white"
          disabled={false}
        />
        <Button
          btnTitle="Checkout"
          onClick={checkoutHandler}
          btnClass="red"
          disabled={false}
        />
      </div>
    </Modal>
  );
};

export default Cart;
