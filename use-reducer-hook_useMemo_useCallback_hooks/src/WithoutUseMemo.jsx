import React from 'react'
import { useState } from 'react'

const WithoutUseMemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculation = () => {
        console.log("Running expensive calculation");
        let total = 0;
        for(let i=0; i < 1000; i++){
            total += i;
        }

        return total;
    }

    const result = expensiveCalculation();

  return (
    <div>
        <h1>WithoutUseMemo</h1>
        <h2>Result : {result}</h2>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p>Count: {count}</p>
    </div>
  )
}

export default WithoutUseMemo
