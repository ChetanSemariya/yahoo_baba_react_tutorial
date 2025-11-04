import {useState} from 'react'

export default function UserProfile() {

    // Multiple states bhi bana skte hai ek sath kuch iss tarah se
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);

    return (
        <>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <button onClick={() => setName("Chetan")}>Change Name</button>
        <button onClick={() => setAge(age + 1)}>Set Age</button>
        </>
    )
}