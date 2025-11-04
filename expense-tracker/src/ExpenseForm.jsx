import {useState, useEffect, useRef} from 'react'

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const titleref = useRef();

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title || !amount) return alert("Please fill all the fields");

    const newExpense = {
        id:Date.now(),
        title:title,
        amount: parseFloat(amount)
    }

    onAddExpense(newExpense)
    setTitle("")
    setAmount("")
    titleref.current.focus();
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
        <input
         type="text" value={title} 
         placeholder="Expense Title"
         onChange={(e) => setTitle(e.target.value)}
         ref={titleref}
        />
        <input placeholder="Amount ₹"
         type="number" 
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
