import Props from "./Props"
import Button from "./Button";
import User from "./User";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ForwardRefComponent from "./ForwardRefComponent";
import SubmitButton from "./SubmitButton";
import UseTransition from "./UseTransition";
import Memoization from "./Memoization";
import UseCallBackHook from "./UseCallBackHook";
import { UserProvider } from "./UserContext";
import Parent from "./components/parent";
import useFetch from "./useFetch";

function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h1>Without Custom Hook</h1>
      <ul>
        {data && data.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )

  // const hobbies = ["Reading", "Coding", "Travelling"] ;

  // function Message() {
  //   alert("Hello from message box");
  // }

  // function ByeMessage() {
  //   alert("Hello from bye message box");
  // }
    
  // return (
  //   <>
  //     <h1>App Component</h1>
  //     <Props name="yahu baba" age={25} city="Chandigarh" hobbies={hobbies}/>
  //     {/* Pass function in props */}
  //     <Button label="Just Click Me" handleClick={ByeMessage}/> 
  //     <Button label="Click Me" handleClick={Message}/>
  //     {/* <Props name="Chetan Semariya"/> */}
  //   </>
  // )

}

export default App
