import Expenses from "./components/expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,7,14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2020,2,12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021,2,28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021,5,12),
    },
    {
      id: 'e5',
      title: 'Trip to France',
      amount: 3565.66,
      date: new Date(2019,8,8),
    },
    {
      id: 'e6',
      title: 'Trip to USA',
      amount: 4222.22,
      date: new Date(2019,1,3),
    },
  ];

  const [expenseList, setExpense] = useState(expenses);

  const addExpense = e => {
    console.log(e);
    setExpense((prevState) => [e, ...prevState]);
  }

  const delExpense = e => {
    const {id} = e.target;
    console.log(id, typeof(id));
    setExpense((prevState) => prevState.filter(el => el.id !== id));
  }

  return (
    <div>
      <h2>Expense list</h2>
        <NewExpense onAddExpense={addExpense}/>
        <Expenses data={expenseList} onDelExpense={delExpense}/>
    </div>
  );
}

export default App;
