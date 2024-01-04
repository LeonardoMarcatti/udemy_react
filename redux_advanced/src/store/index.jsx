import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}})
const {toggle, showNotification} = uiSlice.actions
const {add, remove, replaceCart} = cartSlice.actions
export {toggle, add, remove, showNotification, replaceCart}

export default store