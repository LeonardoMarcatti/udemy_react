import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
   name: 'cart',
   initialState: {items: [], totalQuantity: 0, totalAmount: 0,},
   reducers: {
      add(state, action) {
         const newItem = action.payload
         const existingItem = state.items.find(el => el.id == newItem.id)

         if (!existingItem) {
            state.items.push({id: newItem.id, name: newItem.name, price: newItem.price, quantity: 1, totalPrice: newItem.price})
         } else {
            existingItem.totalPrice += newItem.price
            existingItem.quantity++
         }
         const subTotal = state.items.reduce((acc, cur) =>  acc += (cur.price * cur.quantity) ,0)
         state.totalAmount = subTotal
         state.totalQuantity++
      },
      remove(state, action){
         const id = action.payload
         const existingItem = state.items.find(el => el.id == id)
         if (existingItem.quantity == 1) {
            state.items = state.items.filter(el => el.id != id)
            
         } else {
            existingItem.quantity--
            existingItem.totalPrice -= existingItem.price 
         }
         const subTotal = state.items.reduce((acc, cur) =>  acc += (cur.price * cur.quantity) ,0)
         state.totalAmount = subTotal
         state.totalQuantity--
      },
      replaceCart(state, action) {
         state.totalQuantity = action.payload.totalQuantity
         state.totalAmount = action.payload.totalAmount
         state.items = action.payload.items
      }
   }
})





export default cartSlice