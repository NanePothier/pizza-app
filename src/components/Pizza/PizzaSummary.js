import React, {useContext} from 'react';
import SummaryItem from './SummaryItem';
import classes from './PizzaSummary.module.css';
import CartContext from '../../store/cart-context';

const PizzaSummary = (props) => {
  const cartCtx = useContext(CartContext);

  const ingredientList = props.ingredients.map((ingredient) => {
    return <SummaryItem key={ingredient.id} name={ingredient.name} />;
  });

  const addPizzaToCartHandler = () => {
    const newPizza = {
      pizzaIngredients: [...props.ingredients],
      totalPrice: props.totalPrice
    };

    cartCtx.addPizza(newPizza);
  }

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
        <button className={classes.cart} onClick={addPizzaToCartHandler}>Add to Cart</button>
      </div>
    </section>
  );
};

export default PizzaSummary;
