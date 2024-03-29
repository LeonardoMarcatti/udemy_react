import React from "react";
import style from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./mealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]; 

const AvailableMeals = props => {
  const mealsList = DUMMY_MEALS.map((el) => {
    return (
      <MealItem
        id={el.id}
        name={el.name}
        description={el.description}
        price={el.price}
        key={Math.random()}
      />
    )
  });

  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;