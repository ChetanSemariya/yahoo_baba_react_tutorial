import Props from "./Props"
import Button from "./Button";
import User from "./User";
import { useRef } from "react";
import ForwardRefComponent from "./ForwardRefComponent";
import SubmitButton from "./SubmitButton";

function App() {

  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Submitted");
  }

  return (
    <div>
      <h1>UserFormStatus Hook in React Js</h1>
      <form action={handleSubmit}>
        <SubmitButton />
      </form>
    </div>
  )
}

export default App

// ------------ ABOUT USEFORMSTATUS HOOK -------------- //

// useFormStatus Hook :- Jab bhi koi user submit button pr do baar click krta hai to form 2 baar submit hojata hai usi se prevent krne ke liye humara yhh hook kaam mai aata hai this hook is introduced in react 19 latest version.
// => yhh hook phle data ko server pr leke jata hai frr vaha se client ko deploy hota hai then hume show hota hai
