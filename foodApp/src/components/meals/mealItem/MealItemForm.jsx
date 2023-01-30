import React from "react";
import style from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = props => {
  const {id} = props;
  return (
    <form className={style.form}>
      <Input label="Amount" input={
        {
          type: "number",
          id: `amount_${id}`,
          name: "amount",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1
        }}
      />
      <button>Add</button>
    </form>
  )
}

export default MealItemForm;