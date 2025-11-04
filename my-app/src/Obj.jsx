function Obj() {

    // const user = {
    //     firstName:"John",
    //     lastName:"Doe",
    //     age:25
    // }

    // function fullName(user) {
    //     return user.firstName + " " + user.lastName;
    // }

    // return (
    //     <div>
    //         <h2>Personal Details</h2>
    //         {/* <p>First Name : {user.firstName}</p>
    //         <p>Last Name : {user.lastName}</p> */}
    //         <p>Full Name: {fullName(user)}</p>
    //         <p>Age : {user.age}</p>
    //     </div>
    // )

    // -------------- Object Inside an Array ---------------- //

    const users = [
        { firstName:"John", lastName:"Doe", age:25},
        { firstName:"Akshay", lastName:"Kumar", age:26},
        { firstName:"Salman", lastName:"khan", age:24},
    ]

    function fullName(user) {
        return user.firstName + " " + user.lastName;
    }

    return (
        <div>
            <h2>Personal Details</h2>
            <ul>
            {users.map((user, index) => (
                <li>{fullName(user)} is {user.age} years old</li>
            ))}
            </ul>
        </div>
    )
}

export default Obj