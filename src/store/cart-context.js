import React from 'react';

const CartContext = React.createContext({
  pizzaItems: [],
  totalAmount: 0,
  addPizza: () => {},
  removePizza: () => {},
});

export default CartContext;
