import Child from "./child";

function Parent() {
    return (
        <div style={{ backgroundColor:"green", padding:"20px"}}>
            <h2>Parent Component</h2>
            <Child />
        </div>
    );
}


export default Parent;