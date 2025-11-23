/*

// ------------- useMemo Hook ------------ //

Problem :- Let say humare pass ek parent component hai and ek child component now ab jab bhi parent ki state mai changes honge to child component bhi apne aap re-render hoga jabki child component mai changes nahi hue hai bss parent component mai hue hai jisse humare execution speed kam hojati hai or user interface ka time bhi badh jata hai to isi problem ke solution ke liye humare pass react mai ek hook aata hai useMemo jo humare value ko memoize krta hai i.e we can say cache mai rakh leta hai now ab jab bhi parent component load hoga to uske sath child component re-render nahi hoga jab tak uski value mai changes na ho (Actually render to hoga bss uske cache value render hogi)

SYNTAX :-

Note :- Dependency array value pass krna jaruri hai otherwise har baar old value hi return hogi (memoize value)
=> Dependency array mai yaa to hum state ki value pass krskte hai yaa phir props ki and agar array ko khali chodte hai to function ek hi baar run hoga
=> useMemo only value ko memoize krta hai naa ki pure function ko 

const memoizedValue = useMemo(() => {

    // perform an expensive calculation

}, [dependency1, dependency2]);


Benifits :-

1). Improves performance
2). Avoid unnecessary re-renders
3). Reduces computation cost

// ------------ useMemohook App.jsx ------------- //

import Parent from "./Parent"
import WithoutUseMemo from "./WithoutUseMemo"
import WithUseMemo from "./WithUseMemo"

function App() {

  return (
    <>
    {/* <WithoutUseMemo /> 
    {/* <WithUseMemo /> 
//     <Parent />
//     </>
//   )
// }

// export default App


*/