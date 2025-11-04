/*

UseEffect Hook => Jab bhi component render ho to (i.e jab bhi html return krta hai) yhh apne aap run hojata hai ise alg se call nahi krna padta.

## Why we use useEffect ?

=> Fetching data from an API
=> updating the DOM Manually
=> Subscribing/unsubscribing to events
=> Setting up timers (e.g setInterval, setTimeOut)

// ---------- Syntax of useEffect Hook --------------- //

useEffect(setup, dependencies?)

1). Run after every Render (Har bar useEffect run hoga)

useEffect(() => {
    console.log("Hello!");
});

2). Run Once (only ek hi baar run hoga)

useEffect(() => {
    console.log("Hello!");
}, []);

3). Run with Dependency (only phle baar run hoga and jab bhi count ki value mai change hoga tab run hoga)

useEffect(() => {
    console.log("Hello!");
}, [count]);

// --------- Name & count mai change hoga tabhi run hoga ------------- //

useEffect(() => {
    console.log("Hello!");
}, [name, count]);

// ------------------ BENIFITS OF STRICT-MODE IN REACT JS ----------------- //

<strictMode>
</strictMode>

1). Detect unsafe lifecycles - it find the problematic old pattern of code
2). Double-run effects - It exposes side effects that are not cleaned
3). Warn Deprecated API's - It alert you about outDated React code
4). Prepares for future React Versions - Ensures your app will stay compatable
5). Development only - No effect in production build

Note :- Double run effects ko kam krne ke liye yaa to hum strict mode ka use krte hai yaa phir hum useEffect mai hi cleanUp function ka bhi use krskte hai jo purani value ko clean krdeta hai.

useEffect(() => {
    return () => {
        // This is our cleanup function
    }
}, [dependencies]);

PURPOSE :-

=> Clearing timers
=> Unsubscribing from streams or API's
=> Removing event listeners


// ------------------------ REACT ROUTER LIBRARY ------------------------- //

## Steps to working with React Router :-

1). install "react-router-dom" npm package
2). import {BrowserRouter, Routes, Route} from "react-router-dom";

3). function App() {
    return (
        <BrowserRouter> // poore html ko isi ke andar wrap karenge
            <Routes>  // iske andar hum humare routes define karenge

                <Route path="/about" element={<About />} /> 
                <Route path="/contact" element={<Contact />} />
                
            </Routes>
        </BrowserRouter>
    )
}


















*/