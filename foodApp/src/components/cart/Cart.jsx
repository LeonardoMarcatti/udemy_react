import React from "react";
import style from './Cart.module.css';

const Cart = props => {
  const cartItems = <ul className={style['cart-items']}>
    {
      [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(el => <li>{el.name}</li>)
    }
    </ul>;

  return (
    <div>
      {cartItems}
      <div className={style.total}>
        <span>Totel Amount</span>
        <span>65.32</span>
      </div>
      <div className={style.actions}>
        <button className={style['button--alt']}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </div>
  )
}

export default Cart;