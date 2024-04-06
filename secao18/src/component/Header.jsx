import React, {useContext} from "react";
import {CartContext} from '../store/CartContext'
import {UserProgressContext} from '../store/UserProgressContext'
import logo from '../assets/logo.jpg'
import Button from "./UI/Button";

const Header = () => {
  const ctx = useContext(CartContext)
  const progressCtx = useContext(UserProgressContext)

  const handleShowCart = () => progressCtx.showCart()
  const totalItems = ctx.items.reduce((acc, cur) => acc + cur.quantity , 0)
   return (
      <header id="main-header">
         <div id="title">
            <img src={logo} alt="A restaurant" title="A restaurant" />
            <h1>ReactFood</h1>
         </div>
         <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalItems})</Button>
         </nav>
      </header>
   )
}

export default Header;