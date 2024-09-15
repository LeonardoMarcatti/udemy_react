import { useRef } from 'react';
import CartModal from './CartModal.jsx';
import CartContext from '../store/context.jsx';
import { useContext } from 'react';

 const Header = () => {
  const modal = useRef();
  const {items} = useContext(CartContext)
  const handleOpenCartClick = () => modal.current.open();

  let modalActions = <button>Close</button>;

  if (items.length > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return <>
      <CartModal
         ref={modal}
         title="Your Cart"
         actions={modalActions}
      />
      <header id="main-header">
         <div id="main-title">
            <img src="logo.png" alt="Elegant model" />
            <h1>Elegant Context</h1>
         </div>
         <p>
            <button onClick={handleOpenCartClick}>Cart ({items.length})</button>
         </p>
      </header>
    </>
}

export default Header