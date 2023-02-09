import cardContext from "./cardContext"
import {useReducer} from "react"

const defaultState = {
  items: [],
  total: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'add') {
    const updatedTotal = state.total + (action.item.price * action.item.amount)
    const index = state.items.findIndex(el => el.id === action.item.id)
    const existingItem = state.items[index]
    let updatedItems;

    if (existingItem) {
      let updatedItem
      updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount }
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    
    return {items: updatedItems, total: updatedTotal}
  }

  return defaultState;
}

const Provider = props => {
  const {children, onHandleModal} = props
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultState)

  const addItemHandler = item => {
    dispatchAction({type: 'add', item})
  }
  const removeItemHandler = item => {
    dispatchAction({type: 'del', item})
  }

  const data = {
    onShow: onHandleModal,
    items: cartState.items,
    total: cartState.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <cardContext.Provider value={data}>
      {children}
    </cardContext.Provider>
  )
}

export default Provider;