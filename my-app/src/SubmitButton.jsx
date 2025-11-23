import { useFormStatus } from "react-dom";

function SubmitButton() {
    const {pending} = useFormStatus();
    console.log(pending);

    return (
        <div>
            <input type="text" name="username" placeholder="username" />
            <br />
            <br />
            <input type="email" name="email" placeholder="email" />
            <br />
            <br />
            <input type="password" name="password" placeholder="password" />
            <br />
            <br />
            <button type="submit" disabled={pending}>{pending ? "submitting" : "submit"}</button>
        </div>
    )
}

export default SubmitButton;