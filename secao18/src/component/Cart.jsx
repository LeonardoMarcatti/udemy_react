import React, {useContext} from "react";
import Modal from "./UI/Modal";
import {CartContext} from '../store/CartContext'
import {UserProgressContext} from '../store/UserProgressContext'
import { currnecyFormatter } from "../util/formating";
import Button from "./UI/Button";
import CartItem from "./Cartitem";

const Cart = () => {
   const ctx = useContext(CartContext)
   const progressCtx = useContext(UserProgressContext)
   const cartTotal = ctx.items.reduce((acc, cur) => acc + cur.quantity * cur.price, 0) 
   const handleCloseCart = () => progressCtx.hideCart()
   const handleShowCheckout = () => progressCtx.showCheckout()
   
   return (
      <Modal className="cart" open={progressCtx.progress == 'cart'} onClose={progressCtx.progress == 'cart' ? handleCloseCart : null}>
         <h2>Your Cart</h2>
         <ul>
         {
            ctx.items.map(el => <CartItem key={el.id} name={el.name} quantity={el.quantity} price={el.price} onIncrease={() => ctx.addItem(el)} onDecrease={() => ctx.delItem(el.id)}/> )
         }  
         </ul>
         <p className="cart-total">{currnecyFormatter(cartTotal)}</p>
         <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {
              ctx.items.length > 0 && <Button onClick={handleShowCheckout}>Go to Checkout</Button>
            }
         </p>
      </Modal>
   )
}

export default Cart