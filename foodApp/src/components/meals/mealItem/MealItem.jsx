import React, {useContext} from "react";
import style from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import cardContext from "../../../context/cardContext";

const MealItem = props => {
  const {name, description, price, id} = props
  const value = `$${price.toFixed(2)}`
  const ctx = useContext(cardContext)

  const addItemHandler = amount => {
    ctx.addItem({id, name, amount, price})
  }

  return (
    <li className={style.meal}>
      <div>
        <h3>{name}</h3>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{value}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddItem={addItemHandler}/>
      </div>
    </li>
  )
}

export default MealItem;