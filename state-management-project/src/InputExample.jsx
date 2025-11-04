import {useState} from 'react'

export default function InputExample() {

    const [name, setName] = useState("");
    
    // use Form with the help of state management
    return (
        <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <p>Hello, {name || "Guest"}</p>
        </>
    )
}