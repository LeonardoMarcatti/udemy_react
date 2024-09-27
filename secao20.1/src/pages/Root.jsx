import React, {useEffect} from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom"; 
import MainNavigation from '../components/MainNavigation'
import Footer from "../components/Footer";
import { getTokenDuration } from "../util/auth";

const Root = () => {
   // useNavigation nos informa sobre o status da navegação. Com ele podemos criar indicadores de carregamento, carregar dados após mutações, informar status de envio e carregamento de dados. Basicamente nos indica se temos transição de dados ocorrendo.
   // const navigation = useNavigation()
   const token = useLoaderData()
   const submit = useSubmit()
   useEffect(() => {
      if (!token) {
         return
      }
      if (token == 'EXPIRED') {
         submit(null, {action: '/logout', method: 'post'})
         return
      }
      const tokenduration = getTokenDuration()      
      setTimeout(() => {
         submit(null, {action: '/logout', method: 'post'})
      }, tokenduration);
   }, [token, submit])
   
   return (
      <>
         <MainNavigation />
         <main>
            {/* {
               navigation.state == 'loading' && <p>Loading...</p>
            } */}
            <Outlet/>
         </main>
         <Footer/>
      </>
   )
}

export default Root