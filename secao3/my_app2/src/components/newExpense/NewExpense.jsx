import React from "react";
import './newExpense.css';
import ExpenseForm from "./ExpenseForm";

class NewExpense extends React.Component {
  saveHandler = (e) => {
    const data = {...e, id: Math.random()}
    const {onAddExpense} = this.props;
    onAddExpense(data);
  }

  render() {
    return (
      <div className="new-expense">
        <ExpenseForm onSave={this.saveHandler}/>
      </div>
    )
  }
}

export default NewExpense;