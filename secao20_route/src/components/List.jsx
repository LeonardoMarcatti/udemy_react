import React from "react";
import { Link } from "react-router-dom";

const productsList = [{id: 'cars', name: 'Carros'}, {id: 'motorcycles', name: 'Motos'}, {id: 'trucks', name: 'Caminhões'}, {id: 'working', name: 'Utilitários'}, {id: 'pickups', name: 'Pickups'}]

const List = () => {
   return (
      <ul id="list">
         {
            React.Children.toArray(
               productsList.map((el) => {
                  return <li><Link to={`${el.id}`}>{el.name}</Link></li>
               })
            )
         }
      </ul>
   )
}

export {productsList}
export default List