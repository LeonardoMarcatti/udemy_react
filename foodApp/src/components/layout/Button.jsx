import React, {useContext, useEffect, useState} from "react";
import style from './Button.module.css';
import CartIcon from "../cart/CartIcon";
import cardContext from "../../context/cardContext";

const Button = props => {
  const ctx = useContext(cardContext)
  const {items} = ctx
  const [highLight, setHighLight] = useState(false);
  const number = items.reduce((curr, item) => curr + item.amount, 0);

  const btnStyles = `${style.button} ${highLight ? style.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighLight(true)

    const timer = setTimeout(() => {
      setHighLight(false)
    }, 300);

    return () => clearTimeout(timer)

  },[items])


  
  return <button type="button" className={btnStyles} onClick={ctx.onShow}>
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