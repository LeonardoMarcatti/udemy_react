import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  const { data } = props;
  return (
    <div className="expenses">
      { 
        data.map((el) => <ExpenseItem data={el} key={el.id}/>)
      }
    </div>
  )
}

export default Expenses;
