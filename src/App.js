import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Card from './components/UI/Card';
import PizzaContent from './components/Pizza/PizzaContent';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Card>
        <PizzaContent />
      </Card>
    </CartProvider>
  );
}

export default App;
