import {useState} from 'react'

export default function Student() {

    const [student, setStudent] = useState({
        name: "John",
        grade:"A",
        city:"Delhi"
    });

    const changeCity = () => {
        setStudent({...student, city:"Mumbai"}) // here we use spread operator that means hume only city mai change krna hai baki kisi mai nahi
    }
    
    return (
        <>
        <h2>Name: {student.name}</h2>
        <h2>Grade: {student.grade}</h2>
        <h2>City: {student.city}</h2>
        <button onClick={changeCity}>Change City</button>
        </>
    )
}