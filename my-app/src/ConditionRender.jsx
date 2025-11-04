function ConditionRender() {

    // const isLoggedIn = false;
    // let message;

    // if(isLoggedIn) {
    //     message = <h1>Welcome User!</h1>
    // }else{
    //     message = <h1>Please Login</h1>
    // }

    // return <div>{message}</div>

    // ------------ With Ternary ------------ //
    // return (
    //     <div>
    //         {isLoggedIn ? <h1>Welcome User!</h1> : <h1>Please Login</h1>}
    //     </div>
    // )

    // ------------ With Logical Operator ---------- //

    const hasMessage = true;

    return (
        <div>
            {hasMessage && <p>You have a new message</p>}
        </div>
    )

}


export default ConditionRender