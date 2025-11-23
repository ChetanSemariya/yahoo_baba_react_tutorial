import { useContext } from "react";
import { UserContext } from "../UserContext";

function Child() {
    const {user, setUser} = useContext(UserContext);
    return (
        <div style={{ backgroundColor:"yellow", padding:"20px"}}>
            <h2>Child Component : {user}</h2>
            <button onClick={() => setUser("Chetan Semariya")}>Change User</button>
        </div>
    );
}


export default Child;