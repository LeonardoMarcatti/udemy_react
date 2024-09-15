import { createContext } from "react";

const CartContext = createContext({items: [], addItemToCart: () => {}, updateQuantity: () => {}})

export default CartContext