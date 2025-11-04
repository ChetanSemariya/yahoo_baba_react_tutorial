import {useState, useEffect} from 'react'

export default function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
       const interval = setInterval(()=> {
        setSeconds((prev) => prev + 1)
       },1000)

       // clean-up function (Double-effect ko khatam krdega)
       return () => {
            clearInterval(interval)
            console.log("Timer cleared");
       }

    }, []);

    return (
        <div>
            <h2>Seconds : {seconds}</h2>
        </div>
    )
}