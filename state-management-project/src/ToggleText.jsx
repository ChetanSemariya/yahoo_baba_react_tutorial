import {useState} from 'react'

export default function ToggleText() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
        <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Text
        </button>

        {isVisible && <p>This is secret message</p>}
        </>
    )
}