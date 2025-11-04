import Props from "./Props"
import Button from "./Button";

function App() {

  const hobbies = ["Reading", "Coding", "Travelling"] ;

  function Message() {
    alert("Hello from message box");
  }

  function ByeMessage() {
    alert("Hello from bye message box");
  }
    
  return (
    <>
      <h1>App Component</h1>
      <Props name="yahu baba" age={25} city="Chandigarh" hobbies={hobbies}/>
      {/* Pass function in props */}
      <Button label="Just Click Me" handleClick={ByeMessage}/> 
      <Button label="Click Me" handleClick={Message}/>
      {/* <Props name="Chetan Semariya"/> */}
    </>
  )

}

export default App
