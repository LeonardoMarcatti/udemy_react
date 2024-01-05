import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect} from 'react';
// import {showNotification} from './store/index'
import Notification from './components/UI/Notification'
import {sendCartData, fetchCartData} from './store/cartActions'
let initial = true

const App = () => {
  const show = useSelector(state => state.ui.show)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
    
  }, [fetchCartData])
  

  useEffect(() => {
    // const sendData = async () => {
      // dispatch(showNotification({status: 'pending', title: 'Sending...', message: 'Sending cart data'}))
      // const response = await fetch('https://projetc-react-default-rtdb.firebaseio.com/cart.json', {
      //   method: 'put',
      //   body: JSON.stringify(cart)
      // })

      // if (!response.ok) {
      //   throw new Error('Send failed')
      // }

      // dispatch(showNotification({status: 'success', title: 'Success', message: 'Data sent'}))
    // }

    if (initial == true) {
      initial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }


    // sendData().catch(error => dispatch(showNotification({status: 'error', title: 'Error', message: 'Data not sent'})))
    
  }, [cart, dispatch])


  return (
    <>
    {
      notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>
    }
      <Layout>
        {
          show && <Cart />
        }
        <Products />
      </Layout>
    </>
  );
}

export default App;
