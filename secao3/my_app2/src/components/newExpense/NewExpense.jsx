import React from "react";
import './newExpense.css';
import ExpenseForm from "./ExpenseForm";
import AddExpenseButton from "./AddExpenseButton";

class NewExpense extends React.Component {
  state = {
    showForm: false
  }

  saveHandler = (e) => {
    const data = {...e, id: Math.random()}
    const {onAddExpense} = this.props;
    onAddExpense(data);
  }

  handleShowForm = () => this.setState((prevState) => ({showForm: !prevState.showForm}))

  render() {
    const {showForm} = this.state;
    return (
      <div className="new-expense">
        {
          (showForm)? <ExpenseForm onSave={this.saveHandler} onShowForm={this.handleShowForm}/>
          : <AddExpenseButton onShowForm={this.handleShowForm}/>
        }
      </div>
    )
  }
}

export default NewExpense;