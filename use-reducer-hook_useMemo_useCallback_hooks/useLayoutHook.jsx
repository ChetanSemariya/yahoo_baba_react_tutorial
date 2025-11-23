/*

// ----------------- useLayout Hook ------------------ //

=> Work similar as useEffect hook but the difference is that useEffect component ke render hone ke baad call hota hai and useLayoutEffect call ke render hone se just phle call hota hai (i.e html print hone ke phle call krta hai)

## When we use useLayoutEffect :-

!). Used for DOM measurement
2). Used for layout adjustments
3). Prevents flicker/jumping
4). Animation lagane ke liye component load hone se phle

## When should you not use useLayoutEffect :-

1). API calls & fetching Data
2). Event Listeners
3). Local state updates
4). Anything not related to DOM measurement or layout


SYNTAX :- useLayoutEffect(setup, dependencies)

1). Run after every Render

useLayoutEffect(() = {
    console.log("Hello!");
});

2). Run Once

useLayoutEffect(() => {
    console.log("Hello!");
});

3). Run with Dependency

useLayoutEffect(() => {
    console.log("Hello!");
}, [count]);





*/