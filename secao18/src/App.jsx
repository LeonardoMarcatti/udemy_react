import React from "react";
import Header from "./component/Header";
import Meals from "./component/Meals";
import {CartContextProvider} from './store/CartContext'
import {ProgressProvider} from './store/UserProgressContext'
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";

const App = () => {
  return (
    <ProgressProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </ProgressProvider>
  );
}

export default App;
