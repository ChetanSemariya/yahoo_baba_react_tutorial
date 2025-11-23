/*

// ---------- useContext Hook ------------- //

useState => Mostly used in Local State management
useContext => Used in global state management

Prop Drilling :- Let say humare pass parent mai koi props hai jise hum grandchild ko pass krna chahte hai yaa great grand child ko pass krna chahte hai to use hum directly pass nahi krskte ek sequence mai hi pass krna padega, now ab agar hume deeply nested mai data ko bhejna hai to isse complexity bahut badh jaati hai and humare code ke execution ko bhi effect padta hai to isi problem ke solution ke liye hum useContext hook ka use krte hai jisse mai direclty props ko bhej skte hai parent se grand child mai.


Parent
  |
  |
  |
Child
  |
  |
GrandChild
  |
  |
GreatGrandChild

# Benifits of useContext Hook :-

1). Avoids Prop Drilling
2). Helps in Global State Management
3). Simplifies access to shared data (i.e easily kisi bhi component se hum data ko access krskte hai without the help of props)


// --------------- How to work with useContext Hook ------------- //

1). Creating the Context

Method name :- createContext

const UserContext = createContext();

2). Providing the Context (context ko har component ke liye available krdeta hai)

Method name :- Provider

Note :- value name ka attribute pass krna compulsory hai iska naam kuch or nahi rakh skte 
2). provider ke andar hum component tree ko pass krte hai kisi ek component ko nahi hum component tree ke kisi top vale ko define krte hai jisse vo value har component mai access krskte hai.
3). Iske andar hum multiple components ke name bhi define krskte hai

return (
    <UserContext.Provider value="chetan">
        <Child /> ------------ component tree ko pass krte hai --------- //
    </UserContext.Provider>
)
    
3). Consuming the Context (Agar kisi bhi component mai context ka use krna hai to uske liye hum iss method ka use krte hai)

Method name :- useContext

Note :- Jaha pr bhi hum value ko access krna chahte hai use iss tarah se access krskte hai

const user = useContext(UserContext);
return <p>Hello {user} </p>


// ---------------- COMMON USE CASE OF useContext ------------------ //

a). Theme switching (light/dark mode)
b). Authentication / User data
c). Language / Locale settings
d). Sharing data across deeply nested components

*/