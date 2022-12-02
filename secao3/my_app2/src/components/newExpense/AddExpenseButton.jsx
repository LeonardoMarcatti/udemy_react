import React from "react";

class AddExpenseButton extends React.Component {
  render(){
    const {onShowForm} = this.props;
    return (
        <button type="button" onClick={onShowForm}>Add Expense</button>
    )
  }
}

export default AddExpenseButton;
