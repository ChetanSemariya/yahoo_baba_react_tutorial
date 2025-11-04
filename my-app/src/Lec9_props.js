/*

// ----------- PROPS In ReactJs -------------- //

Props :- Jab bhi hume component ke andar dynamically names print karane hote hai to uske liye hum props ka use krte hai.(i.e component ke andar agar koi property pass krni hoti hai to use hum props ki help se krskte hai)

Note:- Here name is defined as props (i.e properties)

Component                    HTML Code

<Hello />                    <h1>Hello</h1>
<Hello name="chetan"         <h1>Hello Chetan</h1>
<Hello name="Test" />        <h1>Hello Test </h1>

For Example :-

<Hello name="chetan" age={25} />

function Hello(props) {
    return(
        <div>
            <h2>Hello, {props.name} </h2>
            <h2>Hello, {props.age} </h2>
        </div>
    );
}

// --------- Destructuring Props ---------- //

function Hello({name, age}) {
    return (
        <div>
            <h2>Hello, {name} </h2>
            <p>Age : {age} </p>
        </div>
    )
}


Note:- Jese ki javascript mai hum humare value ko overrite krskt hai i.e name ko change krna chahe props mai to vo possible nahi hai react mai

props.name = "new name"  ==> Not possible

// -------- Props mai hum yhh sabhi data easily se bhej skte hai --------- //

1). string
2). Number
3). Array
4). Object
5). Function


*/