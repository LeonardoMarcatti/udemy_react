import React, {useRef, useState} from "react";
import style from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = props => {
  const{onAddItem, id} = props
  const amountRef = useRef()
  const [valid, setValid] = useState(true)

  const submitHandler = e => {
    e.preventDefault();
    const amount = +amountRef.current.value

    if (amount > 5 || amount < 1) {
        setValid(false)
        return null;
    }

    onAddItem(amount)
  }

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input 
        label="Amount"
        ref={amountRef}
        input={
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
      <button type="submit">Add</button>
      {
        !valid && <p>Please enter a valid amount(1-5).</p>
      }
    </form>
  )
}

export default MealItemForm;