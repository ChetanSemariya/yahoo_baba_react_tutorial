import './App.css'

function Hello() {
    const name = "Chetan semariya";

    // const headingStyle = {
    //     color:"red",
    //     textAlign:"center",
    //     backgroundColor:"pink",
    //     fontSize:"50px"
    //     // fontSize:50 // work same as above
    // }

    // inline css agar variable banake use krna hoto iss tarah se krskte hai
    // return <h2 style={headingStyle} className='test'>Hello {name}</h2>

    // inline css agar direct likhna hoto iss tarah se likh skte hai
    return (
        <>
            <h2 style={{color:"red",textAlign:"center",}}>Hello {name}</h2>
            <p className='test'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, molestiae.</p>
        </>
    )
}

export default Hello