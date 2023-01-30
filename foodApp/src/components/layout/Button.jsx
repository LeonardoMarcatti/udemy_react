import React from "react";
import style from './Button.module.css';
import CartIcon from "../cart/CartIcon";

const Button = props => {
  return <button type="button" className={style.button}>
    <span className={style.icon}>
      <CartIcon/>
    </span>
    <span>
      Your Cart
    </span>
    <span className={style.badge}>
      3
    </span>
  </button>
}

export default Button;