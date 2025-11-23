import { memo } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>React Memoization</h1>
//       <Memoization name="chetan"/>
//       <h2>Count : {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       {/* <UseTransition /> */}
//     </div>
//   )
// }

// function Memoization({ name }) {
//     console.log("Child component re-rendered");
//     return (
//         <>
//         <h2>Child Component {name}</h2>
//         <p>This is child compoennt</p>
//         </>
//     )
// }

// export default memo(Memoization);

// ******** OR WE CAN DO LIKE THAT SIMPLY *********** //

const Memoization = memo(({ name }) => {
    console.log("Child component re-rendered");
    return (
        <>
        <h2>Child Component {name}</h2>
        <p>This is child compoennt</p>
        </>
    )
})

export default Memoization;

/*

// Memoization :- Application ki performance ko improvement krne ke kaam mai aati hai.Iske andar 2 hook aate hai 
=> useMemo (Memoize expensive value) // jaha complex calculation hoti hai vaha use hota hai
=> useCallback (Memoize function) // work inside the component yhh function ko re-creation hone se bachata hai

=> React Memo is a high order component, it is not a hook and yhh poore component pr work krta hai. It prevents unneccessary re-rendering in the functional components

Benifits - yhh humare component ko unneccessary re-rendering krne se rokta hai

Note:- class component mai Re-rendering ko rokne ke liye pure component ka use kiya jata tha, same thing hum functional component mai bhi achieve krskte hai with the help of Memoization.
=> Agar props ki value yaa state same hai to hum child component ko re-render nahi karate hai jisse humare performance improve hoti hai


// useMemo Hook :-

1). Avoid re-running expensive calculations like complex calculations
2). Improve performance
3). Prevent unneccessary renders of dependent component

SYNTAX :-

useMemo(Arrow function, [dependency array]);

// useCallback Hook :-

1). useCallback is Hook
2). Memoize functions
3). prevent unneccessary re-renders
4). similar to useMemo but not for functions

*/