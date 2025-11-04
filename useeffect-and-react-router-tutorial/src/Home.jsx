import { useNavigate } from "react-router-dom"

// useNavigate Hook = Agar javascript ki help se hume koi link banani hai to uske liye hum iska use krte hai yhh window.location.href ka replacement hai


export default function Home() {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about");
    }

    return (
        <div>
            <h2>Welcome to home page</h2>
            <button onClick={goToAbout}>Go to About</button>
        </div>
    )
}