import {useState} from 'react'

function Todo() {

  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos]     = useState([])

  // add todo function
  const handleSubmit = (e) => {
     e.preventDefault();
     if(newTodo) {
        setTodos([...todos, {text:newTodo, completed:false}]) // jo phle se value hai unko nahi chedega jo new value aaye hai unhe add krdega
        setNewTodo('')
     }
  }

  // delete todo function
  const handleDelete = (index) => {
     const newTodos = [...todos];
     newTodos[index].completed = !newTodos[index].completed
     setTodos(newTodos)
  }

  return (
    <div>
        <h1>Todo App</h1>
        <form onSubmit = {handleSubmit}>
            <input type="text"
             value={newTodo}
             onChange={(e) => setNewTodo(e.target.value)}
             placeholder='Add new todo' />

            <button type="submit">Add Todo</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <span 
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default Todo
