/*

React State Mangement :-

1). useState :- 

const [state, setState] = useState(initialState);
const [count, setCount] = useState(0);

where, state = state variable
setState = setter function

2). useReducer :-

const [state, dispatch] = useReducer(reducer, initialArg);

where, state = state variable
reducer = state setter function
dispatch = yhh function reducer ka work decide krta hai ki kab krna hai. Dispatch function ko iss tarah se call krte hai

SYNTAX :-  dispatch({type: "increment"}) // here type denotes our action

// ********** Define State setter function ************ //

function reducer(state, action) {  // here state mai hum humare old value pass krte hai and action mai uska type define krte hai
    switch(action.type) {
        case "increment"
            //

        case "decrement":
            //

    }
}

*************** Note:- Main Difference between useState and useReducer *************

1). useState ki initial state mai hum kuch bhi value le skte hai like integer, string, boolean, array, object but useReducer ke initialArg mai hum only array or object hi le skte hai
2). simple values ke liye useState ka use krte hai and complex ya multiple ke liye useReducer ka use krte hai
3). useState ek time pr ek hi action perform krta hai whereas useReducer ek time pr multiple actions perform krskta hai

Problem :- Let suppose humne koi state banaye hai count ko increment krne ki now ab humare pass situation yhh hai ki ek state count ko increment kare, ek decrement kare, ek divide kare, ek multiply kare to uske liye hume setCount setter function ko multiple times call karna padta tha isi complexity ko kam krne ke liye hume reducer method ka use krte hai


// useReducer App.jsx code

import Counter from "./Counter"
import CounterTwo from "./CounterTwo"
import Form from "./Form"
import Test from "./Test"

function App() {

  return (
    <>
    <CounterTwo />
      {/* <Test /> }
//       {/* <Form /> }
//       {/* <Counter /> }
//     </>
//   )
// }

// export default App


*/