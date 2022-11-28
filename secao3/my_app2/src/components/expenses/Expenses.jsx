import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';

function Expenses(props) {
  const {data} = props;
  const [year, setYear] = useState('2019');
  const handleYear = (e) => {
    const {value} = e.target;
    setYear(value);
  }

  const filteredExpenses = () => (data.filter(el => el.date.getFullYear() === Number(year)));

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onSetYear={handleYear} selectedYear={year}/>
        { 
          filteredExpenses().map((el) => <ExpenseItem data={el} key={el.id}/>)
        }
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
