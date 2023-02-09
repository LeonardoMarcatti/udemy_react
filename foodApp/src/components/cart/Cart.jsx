import React, {useContext} from "react";
import Modal from "../UI/Modal";
import style from './Cart.module.css';
import cardContext from "../../context/cardContext";
import CartItem from "./CartItem";

const Cart = props => {
  const {onClick} = props
  const ctx = useContext(cardContext)
  const total = `$${ctx.total.toFixed(2)}`
  const hasItems = ctx.items.length > 0
  const removeItemHandler = id => {}
  const addItemHandler = item => {}

  const cartItems = (
    <ul className={style['cart-items']}>
      {
        ctx.items.map(el => {
        return (
          <CartItem
            key={el.id}
            name={el.name}
            price={el.price}
            amount={el.amount}
            onRemove={removeItemHandler.bind(null, el.id)}
            onAdd={addItemHandler.bind(null, el)}/>
        )        })
      }
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
        <span>Total</span>
        <span>{total}</span>
      </div>
      <div className={style.actions}>
        <button className={style['button--alt']} onClick={onClick}>Close</button>
        {
          hasItems && <button className={style.button}>Order</button>
        }
        
      </div>
    </Modal>
  )
}

export default Cart;