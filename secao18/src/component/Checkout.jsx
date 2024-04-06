import React, {useContext} from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import {UserProgressContext} from '../store/UserProgressContext'
import { currnecyFormatter } from "../util/formating";
import Input from "./UI/Input";
import Button from './UI/Button'
import { useHTTP } from "../hooks/useHTTP";

const requestConfig =  {
   method: 'post',

   headers: {
      'Content-Type' : 'application/json'
   }
}

const Checkout = () => {
   const ctx = useContext(CartContext)
   const total = ctx.items.reduce((acc, cur) => acc + cur.quantity * cur.price, 0) 
   const progressCtx  = useContext(UserProgressContext)
   const {data, isLoading, errorState, sendRequest, clearData} = useHTTP('http://localhost:3000/orders', requestConfig)

   const handleCloseCheckout = () => progressCtx.hideCheckout()
   const handleClose = () => progressCtx.hideCheckout()
   const handleFinish = () => {
      progressCtx.hideCheckout()
      ctx.clearCart()
      clearData()
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      const entries = Object.fromEntries(formData.entries())
      sendRequest(JSON.stringify({
         order: {
            items: ctx.items,
            customer: entries
         }
      }))
   }

   let actions = <><Button type='button' textOnly onClick={handleCloseCheckout}>Close</Button>
   <Button type='submit'>Submit Order</Button></>

   if (isLoading) {
      actions = <span>Sending order...</span>
   }

   if(data && !errorState){
      return <Modal open={progressCtx.progress =='checkout'} onClose={handleClose}>
         <h2>Success</h2>
         <p>Your order was submitted!</p>
         <p className="modal-actions">
            <Button onClick={handleFinish}>OK</Button>
         </p>
      </Modal>
   }

   return (
      <Modal open={progressCtx.progress == 'checkout'} onClose={handleClose}>
         <form action="" method="post" onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total: {currnecyFormatter(total)}</p>
            <Input label="Full Name" type="text" id="name"/>
            <Input label="Email address" type="email" id="email" />
            <Input label="Street" type="text" id="street"/>
            <div className="control-row">
               <Input label="Postal Code" type="text" id="postal-code"/>
               <Input  label="City" type="text" id="city"/>
            </div>
            {
               errorState && <Error title="Failed" message={errorState}/>
            }
            <p className="modal-actions">{actions}</p>
         </form>
      </Modal>
   )
}

export default Checkout