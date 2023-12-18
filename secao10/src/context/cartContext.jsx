import { createContext } from "react";

const CartContext = createContext({items: [], addItem: () => {}, handleUpdateCartItemQuantity: () =>{}, })

export default CartContext