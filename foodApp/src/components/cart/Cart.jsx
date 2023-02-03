import React from "react";
import Modal from "../UI/Modal";
import style from './Cart.module.css';

const Cart = props => {
  const {onClick} = props
  const cartItems = <ul className={style['cart-items']}>
    {
      [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(el => <li key={Math.random()}>{el.name}</li>)
    }
    </ul>;

  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
        <span>Total</span>
        <span>$65.32</span>
      </div>
      <div className={style.actions}>
        <button className={style['button--alt']} onClick={onClick}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;