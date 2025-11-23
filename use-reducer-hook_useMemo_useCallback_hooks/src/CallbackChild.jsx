import React from "react";

function CallbackChild({click}) {
    console.log("Child redered");
    return <button onClick={click}>Child Button</button>
}

export default React.memo(CallbackChild) // react memo check krta rahega ki function mai kuch change hua hai yaa nahi