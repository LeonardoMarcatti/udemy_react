import React from "react";
import './expenseForm.css';

class ExpenseForm extends React.Component {
  state = {
    date: '',
    formatedDate: '',
    title:'',
    amount: '',
    status: false
  }

  formateDate = (e) => {
    const date = e.split('-');
    return date;
  };

  handleChange = (e) => {
    const {name, value} = e.target;
    if (name === 'date') {
      this.setState({
        [name]: new Date(this.formateDate(value)),
        formatedDate: value
      });
      console.log(this.formateDate(value));
    } else {
      this.setState({[name]: value});
    }
  }

  handleClick = () => this.setState((prevState) => ({
    status: !prevState.status
    }));

  handleSubmit = (e) =>{
    e.preventDefault();
    const {onSave} = this.props;
    onSave(this.state);
    this.setState({
      date:'',
      formatedDate: '',
      title:'',
      amount: '',
      status: false
    })
  }

  render(){
    const {formatedDate, title, amount, status} = this.state;
    return (
      <form action="" method="post" onSubmit={this.handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" value={formatedDate} onChange={this.handleChange} disabled={status}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="txt">Text</label>
            <input type="text" name="title" id="txt" value={title} onChange={this.handleChange} disabled={status}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="amount" step="0.01" min="0.01" placeholder="0" value={amount} onChange={this.handleChange} disabled={status}/>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit" disabled={status} >Add Expense</button>
          <button type="button" onClick={this.handleClick}>
            {
              (status)? 'OFF' : 'ON'
            }
          </button>
        </div>
      </form>
    )
  }
}

export default ExpenseForm;