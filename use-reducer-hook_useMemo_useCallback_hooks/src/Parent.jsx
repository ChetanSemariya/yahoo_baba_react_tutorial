import { useState, useMemo } from "react";
import Child from "./Child";

function Parent() {
    const [count, setCount] = useState(0);

    const user = useMemo(() => ({name:"Yahoo Baba", age:28}), [])

    console.log("Parent rendered");

    return (
        <div>
            <h2>Parent Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>Increase Count</button>
            <Child user={user} />
        </div>
    )
}

export default Parent