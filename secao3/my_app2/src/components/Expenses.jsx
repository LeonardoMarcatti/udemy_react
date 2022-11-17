import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
  const { data } = props;
  return (
    <Card className="expenses">
      { 
        data.map((el) => <ExpenseItem data={el} key={el.id}/>)
      }
    </Card>
  )
}

export default Expenses;
