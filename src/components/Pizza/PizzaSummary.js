import React from 'react';
import SummaryItem from './SummaryItem';
import classes from './PizzaSummary.module.css';

const PizzaSummary = (props) => {
  const ingredientList = props.ingredients.map((ingredient) => {
    return <SummaryItem key={ingredient.id} name={ingredient.name} />;
  });

  return (
    <section>
      <div className={classes.heading}>
        <h2>Your Pizza:</h2>
      </div>
      <section className={classes.ingredients}>
        <ul>{ingredientList}</ul>
      </section>
      <div className={classes.total}>
        <span>Total price for this pizza:</span>
        <span>{`  $${props.totalPrice}`}</span>
      </div>
      <div className={classes.buttons}>
        <button className={classes.cancel}>Cancel</button>
        <button className={classes.cart}>Add to Cart</button>
      </div>
    </section>
  );
};

export default PizzaSummary;
