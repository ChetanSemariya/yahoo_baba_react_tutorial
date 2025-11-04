import { useRef } from "react";

export default function UnControlledForm() {

    const nameRef = useRef("chetan"); // reference value
    const emailRef = useRef("chetan@gmail.com");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name : ", nameRef.current.value)
        console.log("Email : ", emailRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>UnControlled Form</h2>
            <input type="text" ref={nameRef} placeholder="Name" />
            <br/>

            <input type="email" ref={emailRef} placeholder="Email" />
            <br/>

            <button type="submit">Submit</button>
        </form>
    );
}