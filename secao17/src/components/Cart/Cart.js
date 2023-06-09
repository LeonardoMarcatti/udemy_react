import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const {onClose} = props
  const [checked, setChecked] = useState(false)
  const [submiting, setSubmiting] = useState(false)
  const [submited, setSubmited] = useState(false)

  const toggleCheck = () => setChecked(prevState => !prevState)
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${Number(cartCtx.totalAmount).toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const submitOrderhandler = async (userData) => {
    setSubmiting(true)
    await fetch('https://projetc-react-default-rtdb.firebaseio.com/orders.json', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },      
      body: JSON.stringify({data: userData, items: cartCtx.items})
    })
    setSubmiting(false)
    setSubmited(true)
    cartCtx.clearItems ()
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {
        checked &&  <Checkout onClick={toggleCheck} onSubmit={submitOrderhandler}/>
      }
      {
        !checked && <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={toggleCheck}>{!checked? 'Order' : 'Cancel'}</button>}
      </div>
      }
    </>
  )

  const submitingContent = <h2 className={classes.message}>Submiting...</h2>

  const submitedOrder = (
    <>
      <h2 className={classes.message}>Order submited!</h2>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>
          Close
        </button>
      </div>
  </>

  )

  return (
    <Modal onClose={props.onClose}>
      {
        !submiting && !submited && cartModalContent
      }
      {
        submiting && submitingContent
      }

      {
        submited && submitedOrder
      }
    </Modal>
  );
};

export default Cart;
