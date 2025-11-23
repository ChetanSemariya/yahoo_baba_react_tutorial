import { memo } from "react";

function App() {

  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   console.log("child button clicked");
  // }

  // --------- With the help of useCallback hook ---------- //
  const handleClick = useCallback(() => {
    console.log("child button clicked");
  },[]);

  return (
    <div>
      <h1>Expensive Computation with UseMemo Hook</h1>
      <UseCallBackHook onClick={handleClick}/>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment : {count}</button>
      {/* <UseTransition /> */}
    </div>
  )
}

function UseCallBackHook( { onClick}) {
    console.log('Child component renders');
    return (
        <>
            <h2>Child Component</h2>
            <button onClick={onClick}>Click me</button>
        </>
    )
}

export default memo(UseCallBackHook);

/*

Problem :- Jab bhi hum parent component se child component mai koi function pass karenge and child component mai agar humne memoization bhi kr rakha hai tab bhi humara child component baar baar re-render hoga parent ki kisi bhi state mai change krne pr to isi problem ke solution ke liye hum useCallback hook ka use krte hai


*/