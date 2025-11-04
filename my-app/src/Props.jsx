// function Props(props) {
    // return  (
    //     <div>
    //         <h2>Hello {props.name}</h2>
    //         <p>Age : {props.age}</p>
    //         <p>City : {props.city}</p>
    //     </div>
    // )

    // --------- Or we can do like that with destructuring ----------- //
    // const {name, age, city} = props
    // return  (
    //     <div>
    //         <h2>Hello {name}</h2>
    //         <p>Age : {age}</p>
    //         <p>City : {city}</p>
    //     </div>
    // )
// }

// -------- Destructuring Props ----------- //

// function Props({name="Guest", age=18, city="unknown"}) { // props ki defualt value set krskte hai
//     return (
//         <div>
//             <h2>Hello, {name}</h2>
//             <h2>Age : {age}</h2>
//             <h2>City : {city}</h2>
//         </div>
//     )
// }

// -------- Props with Arrays ----------- //

function Props({name="Guest", age=18, city="unknown", hobbies}) {
    return (
        <div>
            <h2>Hello, {name}</h2>
            <h2>Age : {age}</h2>
            <h2>City : {city}</h2>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}

export default Props