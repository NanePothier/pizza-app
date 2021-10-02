import React, { useReducer } from "react";
import Button from "../UI/Button";
import PizzaList from "./PizzaList";
import PizzaSummary from "./PizzaSummary";
import INGREDIENTS from "../../assets/ingredient_data";

const defaultPizzaState = {
  ingredients: [],
  totalPrice: 10,
  currentScreen: "start",
  curIngType: "crust",
};

const pizzaReducer = (prevState, action) => {
  if (action.type === "START") {
    return {
      ingredients: [],
      totalPrice: 10,
      currentScreen: "selection",
      curIngType: "crust",
    };
  } else if (action.type === "ADVANCE") {
    let nextScreen, nextIngType;

    if (prevState.curIngType === "crust") {
      nextScreen = "selection";
      nextIngType = "meat";
    } else if (prevState.curIngType === "meat") {
      nextScreen = "selection";
      nextIngType = "vegetable";
    } else {
      nextScreen = "summary";
      nextIngType = "none";
    }

    return {
      ingredients: prevState.ingredients,
      totalPrice: prevState.totalPrice,
      currentScreen: nextScreen,
      curIngType: nextIngType,
    };
  } else if (action.type === "ADD_ING") {
    const newIng = { ...action.ingredient };
    const updatedIngredients = [...prevState.ingredients];
    let updatedPrice = prevState.totalPrice;

    // a pizza can only have one type of crust
    if (action.ingredient.type === "crust") {
      const ingIndex = prevState.ingredients.findIndex((ing) => {
        return ing.type === "crust";
      });

      if (ingIndex !== -1) {
        updatedIngredients.splice(ingIndex, 1, newIng);
      } else {
        updatedIngredients.push(newIng);
      }
    } else {
      const ingIndex = prevState.ingredients.findIndex((ing) => {
        return action.ingredient.id === ing.id;
      });

      if (ingIndex !== -1) {
        updatedIngredients.splice(ingIndex, 1);
        updatedPrice -= prevState.ingredients[ingIndex].price;
      } else {
        updatedIngredients.push(newIng);
        updatedPrice += newIng.price;
      }
    }

    return {
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
      currentScreen: prevState.currentScreen,
      curIngType: prevState.curIngType,
    };
  } else if (action.type === "REMOVE_ING") {
  }

  return defaultPizzaState;
};

const PizzaContent = (props) => {
  const [pizzaState, dispatchPizzaAction] = useReducer(
    pizzaReducer,
    defaultPizzaState
  );
  const title = "Create Pizza";

  const startCreatingPizza = () => {
    dispatchPizzaAction({ type: "START" });
  };

  const selectedIngredientHandler = (id) => {
    const ingredient = INGREDIENTS.find((ingredient) => {
      return ingredient.id === id;
    });

    dispatchPizzaAction({ type: "ADD_ING", ingredient: ingredient });
  };

  const advanceHandler = () => {
    dispatchPizzaAction({ type: "ADVANCE" });
  };

  const resetPizzaStateHandler = () => {
    dispatchPizzaAction({ type: "RESET" });
  };

  return (
    <React.Fragment>
      {pizzaState.currentScreen === "start" && (
        <Button
          btnTitle={title}
          onClick={startCreatingPizza}
          btnClass="dark-red"
          disabled={false}
        />
      )}
      {pizzaState.currentScreen === "selection" && (
        <PizzaList
          ingArray={INGREDIENTS}
          type={pizzaState.curIngType}
          selectIngredient={selectedIngredientHandler}
          advance={advanceHandler}
          pizzaIngArray={pizzaState.ingredients}
        />
      )}
      {pizzaState.currentScreen === "summary" && (
        <PizzaSummary
          ingredients={pizzaState.ingredients}
          totalPrice={pizzaState.totalPrice}
          resetPizzaState={resetPizzaStateHandler}
        />
      )}
    </React.Fragment>
  );
};

export default PizzaContent;
