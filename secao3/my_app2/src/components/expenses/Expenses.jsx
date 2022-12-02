import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpesesChart from './ExpensesChart';

function Expenses(props) {
  const {data} = props;
  const [year, setYear] = useState('2019');
  const handleYear = (e) => {
    const {value} = e.target;
    setYear(value);
  }

  const filteredExpenses = () => (data.filter(el => el.date.getFullYear() === Number(year)));
  const itens = filteredExpenses();
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onSetYear={handleYear} selectedYear={year}/>
      <ExpesesChart expenses={itens}/>
      <ExpensesList data={itens}/>  
      </Card>
    </div>
  )
}

// class Expenses extends React.Component {
//   state = {
//     year: '2019'
//   };

//   handleYear = (e) => {
//     const {value} = e.target;
//     this.setState({
//       year: value
//     })
//   }
//   render(){
//     const {data} = this.props;
//     const {year} = this.state;
//     return (
//       <div>
//         <Card className="expenses">
//         <ExpensesFilter onSetYear={this.handleYear} selectedYear={year}/>
//           { 
//             data.map((el) => <ExpenseItem data={el} key={el.id}/>)
//           }
//         </Card>
//     </div>
//     )
//   }
// }

export default Expenses;
