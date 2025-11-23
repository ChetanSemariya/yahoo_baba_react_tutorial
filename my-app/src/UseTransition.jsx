import { useState, useTransition } from "react"

function UseTransition() {

    // --------- Implement Loading with the help of useState ---------- //
    // const [pending, setPending] = useState(false);

    // const handleClick = async() => {
    //     setPending(true);
        
    //     await new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve();
    //         },2000);
    //     });

    //     setPending(false);
    // }

    // return (
    //     <div>
    //         <h2>UseTransition Hook Demo React</h2>
    //         { pending && <div>Loading...</div>}
    //         <button disabled={pending} onClick={handleClick}>Click</button>
    //     </div>
    // );


    // --------------- WITH HELP OF USETRANSITION HOOK -------------- //
    const [pending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        });
    }

    return (
        <div>
            <h2>UseTransition Hook Demo React</h2>
            { pending && <div>Loading...</div>}
            <button disabled={pending} onClick={handleClick}>Click</button>
        </div>
    );

}

export default UseTransition

// Purpose :- Jab bhi kabhi hum kisi long data ko fetch krte hai to vaha loading ko show karane ke liye hum useTransition hook ka use krte hai otherwise agar hum iss hook ka use na kare to hume yhh logic custom likhna padta tha phle.