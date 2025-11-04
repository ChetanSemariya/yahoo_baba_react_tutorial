import { useState, useEffect } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  // add expense
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]) // purani value ko spread operator ki help se store karenge and new value ko expenses mai store karenge

  }

  // delete expense
  const deleteExpense = (id) => {

  }

  return (
    <div className="app-container">
		<h1>💰 Expense Tracker</h1>
		<ExpenseForm onAddExpense={addExpense} />
		<h3 className="total">Total Expense: ₹750.00</h3>
		<ExpenseList expenses={expenses} onDelete={deleteExpense} />
	</div>
  );
}

export default App
