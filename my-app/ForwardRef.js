// useRef :- Agar hume DOM mai forcefully changes krna hai yaa kuch manipulation krna hai to hum useRef ka use krte the

// ForwardRef :- Agar hum parent component mai hai and parent component mai rahke agar directly child mai Forcefully DOM manipulate karate hai to iss case mai forwardRef ka use krte hai. (i.e parent mai rahke child mai manipulate karna)


function App() {

  const inputRef = useRef();

  const handleFocus = () => {
    console.log("clicked");
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
    inputRef.current.value = "chetan semariya"
  }

  return (
    <div>
      <h1>ForwardRef in React</h1>
      <ForwardRefComponent ref={inputRef}/>
      <br />
      <br />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

// --------- Before React 19 Version ------------ //

// import { forwardRef } from "react";

// function ForwardRefComponent(props, ref) {
//     console.log(props, ref);
//     return (
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     );
// }

// export default forwardRef(ForwardRefComponent); // component tab tak run nahi hoga jab tak hum use forwardRef mai wrap nahi krdete 

// ------------ AFTER REACT 19 VERSION -------------- //

const ForwardRefComponent = (props) => {
    console.log(props.ref);
    return (
        <div>
            <input type="text" ref={props.ref} />
        </div>
    )
}

export default ForwardRefComponent;