import { createContext, useContext } from "react";

const UserContext = createContext(); // create context component ke bahar define krte hai

function App() {
  // const user = "Chetan semariyan sir";
  const user = { name:"Chetan semariyan sir", role:"Admin"}; // we can pass multiple values also in useContext api
  
  return (
    <>
      <UserContext.Provider value={user}>
        <Parent />
      </UserContext.Provider>
    </>
  )
}

function Parent() {
  return <Child />
}

function Child () {
  // const user = useContext(UserContext);
  return (
    <div>
      {/* <h1>Name : {user}</h1> */}
      <GrandChild />
    </div>
  );
    
}

function GrandChild () {
  // const user = useContext(UserContext);
  const {name, role} = useContext(UserContext); // we can pass 
  return <h3>Welcome {name} your role is {role}</h3>
}

export default App

// props Drilling Example

// function Parent() {
//   const userName = "Chetan Semariya";
//   return <Child name={userName} />
// }

// function Child ({name}) {
//   return <GrandChild name={name} />
// }

// function GrandChild({name}) {
//   return <h3>My name is {name}</h3>
// }

// function App() {
  
//   return (
//     <>
//       <Parent />
//     </>
//   )
// }

// export default App
