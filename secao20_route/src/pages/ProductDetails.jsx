import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
   const params = useParams()
   
   return (
   <main>
      <h1>Product Detais</h1>
      <h3>{params.id}</h3>
      <Link to=".." relative="path">Voltar</Link>
   </main>
   )
}

export default ProductDetails