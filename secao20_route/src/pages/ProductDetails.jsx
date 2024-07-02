import React from "react";
import { useParams, Link } from "react-router-dom";
import {productsList} from '../components/List'

const ProductDetails = () => {
   const params = useParams()
   const product = productsList.find(el => el.id == params.id) 

   return (
   <main>
      <h1>Product Detais</h1>
      <h3>
         {
            product.name
         }
      </h3>
      <Link to=".." relative="path">Voltar</Link>
   </main>
   )
}

export default ProductDetails