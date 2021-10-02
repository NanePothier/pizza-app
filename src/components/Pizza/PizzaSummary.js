import React, { useContext } from 'react';
import SummaryItem from './SummaryItem';
import classes from './PizzaSummary.module.css';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';

const PizzaSummary = (props) => {
  const cartCtx = useContext(CartContext);
  const info = 'Every pizza comes with red sauce and delicious cheese!';

  const ingredientList = props.ingredients.map((ingredient) => {
    return <SummaryItem key={ingredient.id} name={ingredient.name} />;
  });

  const addPizzaToCartHandler = () => {
    const newPizza = {
      ingredients: [...props.ingredients],
      totalPrice: props.totalPrice,
    };

    cartCtx.addPizza(newPizza);
    props.resetPizzaState();
  };

  const cancelPizzaHandler = () => {
    props.resetPizzaState();
  };

  return (
    <section className={classes.summary}>
      <div className={classes.heading}>
        <h3>Your Pizza:</h3>
      </div>
      <section className={classes.ingredients}>
        <ul>{ingredientList}</ul>
      </section>
      <div className={classes.info}>{info}</div>
      <div className={classes.total}>
        <span>Total price for this pizza:</span>
        <span>{`  $${props.totalPrice}`}</span>
      </div>
      <div className={classes.buttons}>
        <Button
          btnTitle="Add to Cart"
          onClick={addPizzaToCartHandler}
          btnClass="red"
          disabled={false}
        />
        <Button
          btnTitle="Cancel"
          onClick={cancelPizzaHandler}
          btnClass="white"
          disabled={false}
        />
      </div>
    </section>
  );
};

export default PizzaSummary;
