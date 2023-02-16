import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
  const {data, onDelExpense} = props;

  if (data.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses in this year to show</h2>
  }
  return <ul className="expenses-list">
    { 
      data.map((el) => <ExpenseItem data={el} key={el.id} id={el.id} onDelExpense={onDelExpense}/>)
    }
  </ul>
}

export default ExpensesList;