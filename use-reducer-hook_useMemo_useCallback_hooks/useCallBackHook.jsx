/*

// ----------- useCallBack hook ---------------- //

1). useCallback hook poore function ko hi memoize krta hai and useMemo only values ko

Problem :-

1). Jab bhi counter ki value change hogi to test function har baar call hoga and sath sath child component bhi rendered hoga unnecessarily isi problem ke solution ke liye hum useCallback hook ka use krte hai

const [counter,setCounter] = useState(0);

function Test() {
  // 200 lines of code
}

return (
    <>
        <button onClick={Test}>Click</button>
        <Child click={Test} />
    </>
)

SYNTAX :-

const Test = useCallback(() => {
    function Test() {
        //
    }
}, [dependency1, dependency2]);


where, {dependency = state/props}

//--------------- Benifits of useCallback hook --------------- //

1). Performance Optimization
2). Preventing unnecessary re-renders (with the help of React.Memo)
3). Stable function References (useEffect)


// ----------- useCallBack App.jsx Code ----------------- //

import CallbackCounter from "./CallbackCounter"
import CallbackParent from "./CallbackParent"

function App() {

  return (
    <>
      {/* <CallbackCounter /> *
      <CallbackParent />
//     </>
//   )
// }

// export default App

*/