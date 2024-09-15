import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import useManageState from './hooks/useManageState.jsx';
import CartContext from './store/context.jsx';

const App = () => {
  const {handleAddItemToCart, handleUpdateCartItemQuantity, shoppingCart} = useManageState()
  const ctxValue = {items: shoppingCart.items, addItemToCart: handleAddItemToCart, updateQuantity: handleUpdateCartItemQuantity}

  return (
    <CartContext.Provider value={ctxValue}>
      <Header />
      <Shop onAddItemToCart={handleAddItemToCart}>
         {
            DUMMY_PRODUCTS.map((product) => <li key={product.id}>
               <Product {...product} />
            </li>)
         }
      </Shop>
    </CartContext.Provider>
  );
}

export default App;