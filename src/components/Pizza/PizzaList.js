import React from 'react';
import Ingredient from './Ingredient';
import classes from './PizzaList.module.css';

const PizzaList = (props) => {
  const filteredIngredients = props.ingArray.filter((ingredient) => {
    return ingredient.type === props.type;
  });

  const ingredientList = filteredIngredients.map((ingredient) => {
    return (
      <Ingredient
        key={ingredient.id}
        id={ingredient.id}
        name={ingredient.name}
        type={ingredient.type}
        price={ingredient.price}
        image={ingredient.image.src}
        altText={ingredient.image.alt}
        selectIngredient={props.selectIngredient}
        pizzaIngArray={props.pizzaIngArray}
      />
    );
  });

  return (
    <React.Fragment>
      <div className={classes.list}>
        <ul>{ingredientList}</ul>
      </div>
      <div className={classes.next} onClick={props.advance}></div>
    </React.Fragment>
  );
};

export default PizzaList;
