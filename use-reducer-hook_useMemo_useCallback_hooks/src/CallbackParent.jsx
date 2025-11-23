import { useState, useCallback } from "react";
import CallbackChild from "./CallbackChild";

export default function CallbackParent () {
    const [count , setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Clicked");
    },[count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Parent Button</button>

            <CallbackChild click={handleClick} />
        </div>
    )
}