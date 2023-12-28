import { createContext, useState} from "react";

const UserProgressContext = createContext({
   progress: '',
   showCart: () =>{},
   hideCart: () => {},
   showCheckout: () => {},
   hideCheckout: () => {},
})

const ProgressProvider = (props) => {
   const {children} = props
   const [userProgress, setUserProgress] = useState('')

   const showCart = () => setUserProgress('cart')
   const hideCart = () => setUserProgress('')
   const showCheckout = () => setUserProgress('checkout')
   const hideCheckout = () => setUserProgress('')

   const userProgressCtx = {
      progress: userProgress,
      hideCart,
      showCart,
      showCheckout,
      hideCheckout,
   }

   return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export {UserProgressContext, ProgressProvider}