/*

// -------------- State Management In ReactJs -------------------- //

Props :- Limitation jab bhi hum props mai koi bhi value pass krte hai to uss value ko runtime pr change nahi krskte hai.

<Hello name="yahoo Baba" age={25} />

function Hello(props) {
    return (
        <div>
            <h2>Hello, {props.name} </h2>
            <p>Age : {props.age} </p>
        </div>
    )
};

State :- Agar hum props ke sath mai state ka bhi use krte hai to hum value ko change bhi krskte hai run time pr but there is a still difference between props and stats.
=> State variable state ki value ko check krte rahta hai ki usme kuch change hua hai yaa nahi and agar hua hai to use update krdeta hai


// ---------- Difference Between Props and State ------------- //

Props :-

1). Props are immutable
2). Props are passed to the component
3). Props are like parameters passed to a function.  


State :-

1). State can be changed
2). State is contained inside the component
3). State is like a variable declared in function.

Problem :-

Ex :- Counter Component

Explanation :- Jese hi user click button pr click kare to counter ki value update hojani chahiye but yaha pr value update nahi hogi to isi problem ko solve krne ke liye hum humare counter varialbe ko state varialbe mai convert krdete hai jisse agar humare state mai kuch bhi change aata hai to value update hojati hai

let counter = 0;


function change() {
    counter = counter + 1;
}


return (
    <>
        <h2>Count : {counter} </h2>
        <button onClick={change}>Click</button>
    </>
)

// ----------- HOW TO MAKE STATE VARIABLE ------------ //

## Normal Variable :-

let index = 0 
& if we want to update the value then we can do like that 

index = index + 1;

## State Variable :-

const [index, setIndex] = useState(0);

here,
index = State variable
setIndex = State Setter function this is how it updates the value setIndex(index + 1)

** SetIndex is also done other two important works :-

1). update the variable
2). Render the component again with the help of hooks (in present case useState)

useState = Component's Memory (value ko memory mai store krta hai and update krta hai)

// --------- useState ke andar hum different tarike se value ko pass krskte hai ---------- //

1). Int     - useState(int)
2). Boolean - useState(false)
3). String  - useState("test")
4). Array   - useState(["Red","Green","Blue"])
5). Object  - useState({name:"John",age:25})

// CREATE COMPONENT WITH USESTATE()

Step-1 :- import {useState}  from "react";

Step-2 :- const [index, setIndex] = useState(0);

Step-3 :-

function handleClick() {
    setIndex(index + 1);
}

Step-4 :-  <button onClick={handleClick}>Click</button>

Step-5 :- <h2>Count : {index} </h2>


// ************** TYPES OF STATE MANAGEMENT *************** //

1). Local State :- Isme hume ek hi component ke andar change krna hota hai

ex:- useState()

2). Derived State :- It Depends on local state i.e agar hum local state ke variable mai change krte hai to isse related jo bhi state hai usme bhi changes hojayenge

3). Global State :- Agar humari kisi state ke upar multiple component depend hai and humare state mai change krte hai sabhi component mai bhi changes hojate hai to use hi hum global state kahte hai.

Ex:- useContext(), Redux

4). Server State :- Jab bhi hum server ke sath kaam krte hai to iska use krte hai because agar hum chahte hai ki jese hi server se new data aaye to component apne aap load hojaye to uske liye hum iska use krte hai.

Ex:- useEffect(), React Query (3rd party library)

5). URL State :- Jab bhi hum url se data ko bhejte hai to iss case mai iss state ka use krte hai

Ex :- React Router



// --------------------- FORM HANDLING ----------------- //

JavaScript mai hum value ko kuch iss tarah se uthate hai :-

<input type"text" id="name" />

let name = document.querySelector("#name").value;
console.log(name);

But, JSX mai hum iss tarah se value ko pick nahi krskte i.e DOM Targetting nahi krskte hai iske liye hum controller and uncontrolled component ka use krte hai


# Controlled Components :- With the help of state management

const [name, setName] = useState("");
const [email, setEmail] = useState("");

# UnControlled Components :-

Note:- Jab bhi humari ref ki value change hoti hai to poora component reload nahi hota hai just like in useState
=> useRef is behave like an normal javascript variable because it did not work like useState yhh humare DOM ko reload nahi krta hai

const nameRef  = useRef();
const emailRef = useRef();

here ref = reference

<input type="text" ref={nameRef} />
<input type="email" ref={emailRef} />

console.log(nameRef.current.value);









*/