import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const DUMMY_MEALS = [
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

 


const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [load, setLoad] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  useEffect(() => {
    const getMeals = async () => {
      const data = await fetch('https://projetc-react-default-rtdb.firebaseio.com/meals.json')
      const json = await data.json()
      const meals = []
    
      for (const key in json) {
        meals.push({id: key, name: json[key].name, description: json[key].description, price: json[key].price})
      }

      setMeals(meals)

      if (meals.length > 0) {
        setHasError(false)
      } else {
        setHasError(true)
      }

      setLoad(false)
    }

    getMeals()

  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
       {load && <h3>Loading...</h3>}
       {hasError && <h3>There is no meals now</h3>}
       {!hasError && <Card>{mealsList}</Card>}
    </section>
  );
};

export default AvailableMeals;
