import React from 'react'
import { useState, useCallback } from 'react'

const CallbackCounter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment Counter</button>
    </div>
  )
}

export default CallbackCounter
