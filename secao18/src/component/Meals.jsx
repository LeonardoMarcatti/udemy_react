import React from "react";
import { useHTTP } from "../hooks/useHTTP";
import MealItem from "./MealItem";
import Error from "./Error";

const requestconfig = {}
const Meals = () => {
   const {data, isLoading, errorState} = useHTTP('http://localhost:3000/meals', requestconfig, [])

   if (isLoading) {
      return <p className="center">Loading meals...</p>
   }

   if (errorState) {
      return <Error title="Fails" message={errorState}/>
   }
   
   return (
      <ul id="meals">
         {
            React.Children.toArray(
               data.map(el => {
               return <MealItem meal={el}/>
            })
            )
         }
      </ul>
   )
}

export default Meals