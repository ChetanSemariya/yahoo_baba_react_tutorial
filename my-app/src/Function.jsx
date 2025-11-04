// function Function() {

//     function getName(){
//         return "Chetan Semariya"
//     }
//     return (
//         <>
//             <h1>Hello {getName()}</h1>
//         </>
//     )
// }

// ---------- Functions With Parameters ----------------- //

// function Function() {

//     function getName(yourname){
//         return yourname;
//     }

//     const name = "Chetan Semariya"
//     const name1 = "Chetan Prajapat"
//     return (
//         <>
//             <h1>Hello {getName(name)}</h1>
//             <h1>Bye {getName(name1)}</h1>
//         </>
//     )
// }

// ---------- Using Arrow Functions ----------------- //

// function Function() {

//     const getName = (yourname) => {
//         return yourname;
//     }

//     const name = "Chetan Semariya"
//     const name1 = "Chetan Prajapat"
//     return (
//         <>
//             <h1>Hello {getName(name)}</h1>
//             <h1>Bye {getName(name1)}</h1>
//         </>
//     )
// }

// ---------- Functions With Events ----------------- //

function Function() {

    const getName = (yourname) => {
        return yourname;
    }

    function handleClick() {
        alert('Button Was clicked');
    }

    const handleInput = (event) => {
        console.clear();
        console.log("Value : ", event.target.value);
    }

    const handleMouseOver = () => {
        console.log("Mouse is over the text");
    }

    const handleDoubleClick = () => {
        console.log("Text was Double Clicked");
    }

    const name = "Chetan Semariya"
    const name1 = "Chetan Prajapat"
    return (
        <>
            <h1>Hello {getName(name)}</h1>
            <h1>Bye {getName(name1)}</h1>

            {/* // Ek hi element pr multiple events bhi laga skte hai */}
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet.</p>

            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=> alert("Hello from inside functions")}>Say Hello</button>
            <br />
            <input type="text" onChange={handleInput} placeholder="Type Something.." />
        </>
    )
}

export default Function