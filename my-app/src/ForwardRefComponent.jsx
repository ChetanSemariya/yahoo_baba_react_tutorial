// --------- Before React 19 Version ------------ //

// import { forwardRef } from "react";

// function ForwardRefComponent(props, ref) {
//     console.log(props, ref);
//     return (
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     );
// }

// export default forwardRef(ForwardRefComponent); // component tab tak run nahi hoga jab tak hum use forwardRef mai wrap nahi krdete 

// ------------ AFTER REACT 19 VERSION -------------- //

const ForwardRefComponent = (props) => {
    console.log(props.ref);
    return (
        <div>
            <input type="text" ref={props.ref} />
        </div>
    )
}

export default ForwardRefComponent;