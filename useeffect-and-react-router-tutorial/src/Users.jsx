import {useState, useEffect} from 'react'

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            {users.map((user) => (
                <li key={user.id}>{user.id} - {user.name}</li>
            ))}
        </div>
    )
}