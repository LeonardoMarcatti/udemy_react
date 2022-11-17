import Expenses from "./components/Expenses";
import React from "react";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Trip to France',
      amount: 3565.66,
      date: new Date(2020, 8, 8),
    },
  ];
  return (
    <div>
      <h2>Expense list</h2>
      <React.StrictMode>
        <Expenses data={expenses} />
      </React.StrictMode>
    </div>
  );
}

export default App;
