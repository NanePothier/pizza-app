import React from 'react';

const CartItem = (props) => {
  const ingredients = props.ingredients.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.name}</li>;
  });

  return (
    <li>
      <div>
        <span>Pizza</span>
        <span>{props.totalPrice}</span>
      </div>
      <ul>{ingredients}</ul>
    </li>
  );
};

export default CartItem;
