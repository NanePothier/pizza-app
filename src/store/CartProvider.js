import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  pizzaItems: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === 'ADD') {
    const updatedPizzaItems = [...prevState.pizzaItems];
    updatedPizzaItems.push(action.item);
    const updatedTotalAmount = prevState.totalAmount + action.item.totalPrice;

    return {
      pizzaItems: updatedPizzaItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === 'REMOVE') {
    const pizza = prevState.pizzaItems.find((pizza) => {
      return pizza.id === action.pizzaId;
    });

    const updatedPizzaItems = prevState.pizzaItems.filter((pizza) => {
      return pizza.id !== action.pizzaId;
    });
    const updatedTotalAmount = prevState.totalAmount - pizza.totalPrice;

    return {
      pizzaItems: updatedPizzaItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addPizzaHandler = (pizza) => {
    const id = Math.random() * 100;

    const newPizza = {
      id: id,
      ingredients: pizza.ingredients,
      totalPrice: pizza.totalPrice,
    };

    dispatchCartAction({ type: 'ADD', item: newPizza });
  };

  const removePizzaHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', pizzaId: id });
  };

  const cartContext = {
    pizzaItems: cartState.pizzaItems,
    totalAmount: cartState.totalAmount,
    addPizza: addPizzaHandler,
    removePizza: removePizzaHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
