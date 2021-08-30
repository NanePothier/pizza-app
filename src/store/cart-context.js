import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addPizza: () => {},
  removePizza: () => {},
});

export default CartContext;
