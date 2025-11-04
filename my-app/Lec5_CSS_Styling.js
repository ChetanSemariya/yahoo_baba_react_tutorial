/*

// There are three types of CSS Styling :-

1). Inline Style
2). External Stylesheet
3). CSS Modules

// ----------- Inline Style ------------- //

=> Component ke andar inline CSS kese lagate hai
=> Jsx ke andar inline css ke liye hume attribute ko camelcase mai likhna padta hai
=> And frr uska ek variable banake use kiya jaata hai

function Test() {
    const headingStyle = {
        color:"green",
        fontSize:"30px",
        backgroundColor:"red"
    }

    return <h1 style={headingStyle}>Hello</h1>
}


export default Test;


// ----------- External StyleSheet ------------- //

=> Css ko kisi bhi external file mai likhna then use import krna kisi bhi component mai
=> But here is one problem agar humne css ki class har component mai lagaye hai but component mai css import nahi ki hai only app.jsx mai hi import ki hai to bhi sabhi jagah css import hojaygi. And agar hum chahte hai ki kisi particular component mai hi css ka use ho har component mai nahi to uske liye hum module based css ka use krte hai


// ------------- Module Based CSS ------------------ //

Benifit :- Only jis component mai css use krna chahte hai vahi include hogi har component mai nahi hogi

=> Naming convention - ComponentName.module.css

*/