import React from 'react';
import CartButton from './CartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>PizzaApp</h2>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}></div>
    </React.Fragment>
  );
};

export default Header;
