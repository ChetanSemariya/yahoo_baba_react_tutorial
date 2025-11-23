// Redux :- Prop Drilling ki problem ko solve krne ke liye hum context API ka use krte hai jisme hum ek component ki global state banate hai or use kisi bhi component se use krskte hai, but lets say hum har component ki state context api mai banaye ek hi jagah pr to usse complexity bahut badh jati hai and our state Management is also not well maintained so in that case REDUX comes in picture and provide a way for better State Management.

// Redux store is working on three layer :-

// 1). First is Application State => Where we defined our state
// 2). Redux reducer => Where we write our state update Logic this method is not visible
// 3). Method to notify state change => with the help of subscribe()

//  -->