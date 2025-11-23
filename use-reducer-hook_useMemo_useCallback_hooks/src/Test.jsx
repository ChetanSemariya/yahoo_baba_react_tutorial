import { useReducer } from "react"

function Test() {
    const [checked, toggle] = useReducer((checked) => !checked, false); // jese hi component first time load hoga to uski value hogi false
    // where toggle = dispatch function

    return (
        <div>
            <input type="checkbox" checked={checked}
            onChange={toggle} />

            { checked ? "Checked" : "Not Checked"}
        </div>
    )
}



// ----------- With the help of useState -------------- //

// import { useState } from "react";

// function Test() {
//     const [checked, setChecked] = useState(false);

//     return (
//         <div>
//             <input type="checkbox" checked={checked}
//             onChange={() => setChecked(!checked)} />

//             { checked ? "checked" : "Not Checked"}
//         </div>
//     );
// }

export default Test