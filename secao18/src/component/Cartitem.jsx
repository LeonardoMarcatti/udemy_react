import React from "react";
import { currnecyFormatter } from "../util/formating";

const CartItem = (props) => {
   const {name, quantity, price, onIncrease, onDecrease} = props

   return (
      <li className="cart-item">
         <p>
            {`${name} - ${quantity} x ${currnecyFormatter(price)}`}
         </p>
         <p className="cart-item-actions">
            <button type="button" onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={onIncrease}>+</button>
         </p>
      </li>
   )
}

export default CartItem