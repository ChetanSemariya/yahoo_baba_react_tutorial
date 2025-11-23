import { createContext, useState } from "react";

// initialize context api
export const UserContext = createContext();

// pass value through provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Mohit");

    return (
        <div style={{backgroundColor:"blue", padding:"20px"}}>
            <h2>User Provider</h2>
            <UserContext.Provider value={{ user, setUser}}>
                {children} {/* jo bhi children hai uske pass yhh permission hai ki vo user ya phir setUser state ko use krskta hai */}
            </UserContext.Provider>
        </div>
    )
}