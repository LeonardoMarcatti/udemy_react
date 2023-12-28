import { createContext, useReducer} from "react";

const CartContext = createContext({
   items: [],
   addItem: () => {},
   delItem: () =>{}, 
   clearCart: () => {}
   })

   const cartReducer = (state, action) => {
      const newState = [...state.items]

      if (action.type == 'add') {
         const itemIndex = state.items.findIndex(el => el.id == action.item.id)
         
         if (itemIndex != -1) {
            const existingItem = state.items[itemIndex]
            const updatedItem = {...existingItem, quantity: existingItem.quantity + 1}
            newState[itemIndex] = updatedItem            
         }else{
            newState.push({...action.item, quantity: 1})
         }

         return {...state, items: newState}
      }

      if (action.type == 'del') {
         const itemIndex = state.items.findIndex(el => el.id == action.id)
         const existingItem = state.items[itemIndex]

         if (existingItem.quantity == 1) {
            newState.splice(itemIndex, 1) 
         } else {
            const updatedItem = {...existingItem, quantity: existingItem.quantity - 1}
            newState[itemIndex] = updatedItem
         }

         return {...state, items: newState}
      }

      if (action.type == 'clear') {
         return {...state, items: []}
      }

      return state;
   }

   const CartContextProvider = ({children}) => {
      const [cart, dispatchCartAction] =  useReducer(cartReducer, {items: []})
      
      const addItem = (item) => dispatchCartAction({type: 'add', item})
      const delItem = (id) => dispatchCartAction({type: 'del', id})
      const clearCart = () => dispatchCartAction({type: 'clear'})

      const cartContext = {
         items: cart.items,
         addItem,
         delItem,
         clearCart
      }

      return <CartContext.Provider value={cartContext} >{children}</CartContext.Provider>
   }

export {CartContext, CartContextProvider}