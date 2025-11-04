// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Hello from "./Hello"
// import Bye from "./Bye"
// import Function from "./Function"
// import Arr from "./Arr"
// import Obj from "./Obj"
import ConditionRender from "./ConditionRender"

function App() {

  return (
    <>
      <h1>App Component</h1>
      <ConditionRender />
      {/* <Arr />
      <Obj /> */}
      {/* <Function /> */}
      {/* use hello component here */}
      {/* <Hello />
      // <img src={reactLogo} width="200px" />
      <Bye /> */}
    </>
  )

  // -------- With Contional Rendering ----------- //
  // const isLoggedIn = true;

  // if(isLoggedIn) {
  //   return <Hello />
  // }else{
  //   return <Bye />
  // }
}

export default App
