import {useState, useEffect} from 'react'

export default function First() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `Count : ${count}` // DOM manipulation krke hum title mai count ki value ko show kara skte hai with the help of useEffect
        console.log("Component Re-rendered");
    }, [count,name]);

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}