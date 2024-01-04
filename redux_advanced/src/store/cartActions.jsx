import {showNotification} from './index'
import { replaceCart } from './index'

const sendCartData = (cart) => {
   return async (dispatch) => {
      dispatch(showNotification({status: 'pending', title: 'Sending...', message: 'Sending cart data'}))

      const sendRequest = async () => {
         const response = await fetch('https://projetc-react-default-rtdb.firebaseio.com/cart.json', {
            method: 'put',
            body: JSON.stringify(cart)
          })
    
          if (!response.ok) {
             throw new Error('Send failed')
           }
      }

      try {
         await sendRequest()
         dispatch(showNotification({status: 'success', title: 'Success', message: 'Data sent'}))
         
      } catch (error) {
         dispatch(showNotification({status: 'error', title: 'Error', message: 'Data not sent'}))
      }

   }
}


const fetchCartData = () => {
   return async (dispatch) => {
      const fetchData = async () => {
         const response = await fetch('https://projetc-react-default-rtdb.firebaseio.com/cart.json')

         if (!response.ok) {
            throw new Error('Send failed')
          }

         const json = await response.json()
         return json
      }

      try {
         const data = await fetchData()
         dispatch(replaceCart(data))
      } catch (error) {
         dispatch(showNotification({status: 'error', title: 'Error', message: 'Data not fetched'}))
      }
   }
}

export {sendCartData, fetchCartData}