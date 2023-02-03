import React, {useContext} from "react";
import style from './Button.module.css';
import CartIcon from "../cart/CartIcon";
import cardContext from "../../context/cardContext";

const Button = props => {
  const ctx = useContext(cardContext)
  const number = ctx.itens.reduce((curr, item) => curr + item.amount, 0);
  
  return <button type="button" className={style.button} onClick={ctx.onShow}>
    <span className={style.icon}>
      <CartIcon/>
    </span>
    <span>
      Your Cart
    </span>
    <span className={style.badge}>
      {
        number
      }
    </span>
  </button>
}

export default Button;