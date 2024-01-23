import React from "react";
import { Outlet, useNavigation } from "react-router-dom"; 
import MainNavigation from '../components/MainNavigation'
import Footer from "../components/Footer";

const Root = () => {
   // useNavigation nos informa sobre o status da navegação. Com ele podemos criar indicadores de carregamento, carregar dados após mutações, informar status de envio e carregamento de dados. Basicamente nos indica se temos transição de dados ocorrendo.

   // const navigation = useNavigation()
  

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