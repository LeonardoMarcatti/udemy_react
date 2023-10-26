import React from "react";
import { Link } from "react-router-dom";

const productsList = ['Carros', 'Motos', 'Caminhões', 'Utilitários', 'Pickups']

const List = () => {
   return (
      <ul id="list">
         {
            productsList.map((el, i) => {
               return <li key={i}><Link to={`${el}`}>{el}</Link></li>
            })
         }
      </ul>
   )
}

export default List