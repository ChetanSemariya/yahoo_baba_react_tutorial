/*

************* JSX(Javascript and XML) ***********

=> It is a Syntax extension for Javascript
=> Write HTML-like code inside javascript

For ex :- If we want to create an element

IN JAVASCRIPT -

const element = document.createElement("h1");
element.textContent = "Hello, Javascript";

IN JSX -

const element = <h1>Hello, React </h1>
const element = <h1>Hello, React </h1>;

IN ReactJs Older version :-

const element = React.createElement('h1', null, 'Hello, react!');

Note:- Older version mai reactjs ke tarike se code ko krna padta tha jo ki thoda little bit complicated tha but now in latest version hum jsx ki help se code ko easily mai krskte hai (and in background jsx ka code bhi reactjs ke code mai convert hota hai and frr process hota hai)
=> BABEL - Jsx ke code ko reactjs ke code mai convert krne ka kaam krta hai

// ------------ Agar Jsx ke andar multiple html ka code likhna hoto ------------ //

For single & multiple line :- 

const element = <h1>Hello, React</h1>

const element = (
    <div>
        <h1>Hello, React</h1>
        <p>This is a child element inside JSX</p>
    </div>
);

// ---- OR WE CAN ALSO WRITE LIKE THAT ---------- //

const element = (
    <>
    <h1>Hello, React!</h1>
    <p>This is a child element inside JSX</p>
    </>
);

// -------- How to write Javascript expression in JSx -------- //

const name = "chetan";
const element = <h1>Hello, {name}!</h1>;

//------ How to write  CSS CLASS NAME --------- //

const element = <div className="container">Hello React!</div>;

// -------- How to write SELF CLOSING TAGS ----------- //

const imgElement= <img src="image.jpg" alt="description" />

// ------ ATTRIBUTE NAME MUST BE IN CAMELCASE --------- //

const button = <button onClick={handleClick}>Click Me</button>


**************** COMPONENTS IN REACTJS *****************

Note:- Ek compoenent ke andar multiple component bhi bana skte hai

1). Functional Component

=> It is very easy as compare to class component
=> This is a new component in react while class component is much older

function Greeting () {
    const name = "React";
    return <h1>Welcome to {name}!</h1>;
}

=> With arrow Functional

const Greeting = () => {
    const name = "React";
    return <h1>Welcome to {name}!</h1>;
}

2). Class Component

import React, {Component} from "react";

class Greeting extends Component {
    render() {
        const name = "React";
        return <h1>Welcome to {name}!</h1>
    }
}

Note :- /src/Greeting.jsx

=> Component first letter always be capital otherwise component won't work
=> File jis name se banaye hai usi name se component ka naam bhi dena compulsory hai


*/