import { useMemo, useState } from "react";

function useMemoHook() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const expensiveComputation = () => {
    console.log("Expensive computation started");
    let result = 0;
    for (let i=0; i<1000000000; i++) {
      result += number;
    }
    return result;
  }

  // const result = expensiveComputation();

  // -------- With the help of useMemo Hook ------- //
  const result = useMemo(() => expensiveComputation(), [number])

  return (
    <div>
      <h1>Expensive Computation with UseMemo Hook</h1>
      <p>Expensive {result}</p>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment : {count}</button>
      {/* <UseTransition /> */}
    </div>
  )
}

export default useMemoHook;

// useMemo Hook :-

// 1). Avoid re-running expensive calculations like complex calculations
// 2). Improve performance
// 3). Prevent unneccessary renders of dependent component

// SYNTAX :-

// useMemo(Arrow function, [dependency array]);