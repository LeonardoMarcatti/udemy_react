import { useReducer } from 'react';
import CartContext from './context/cartContext.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';

const shoppingReducer = (state, action) => {
  if (action.type === 'add') {
    const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
  }

  if (action.type === 'update') {
    const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
  }
  return state;
}

const App = () => {
  const [shoppingCartState, dispatch] = useReducer(shoppingReducer, {items: []})
  navigator.geolocation.getCurrentPosition((p) => {name: 'leo'})
  const handleAddItemToCart = (id) => {
    dispatch({type: 'add', payload: id})
  }

  const handleUpdateCartItemQuantity = (productId, amount) =>{
    dispatch({type: 'update', payload: {productId, amount}})
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItem: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity}


  return (
    <CartContext.Provider value={ctxValue}>
      <Header />
      <Shop>
      {
        DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))
        }
      </Shop>
    </CartContext.Provider>
  );
}

export default App;
