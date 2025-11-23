import { useReducer } from "react";

function CounterTwo() {
    function reducer(state, action) {
        return {
            ...state,
            [action.name] : action.value
        }
    }

    const [formData, dispatch] = useReducer(reducer, {
        username:"",
        email: ""
    })

    function handleChange(e) {
        dispatch({
            name: e.target.name,
            value: e.target.value
        })
    }

    return (
        <form>
            <input type="text" name="username" value={formData.username}
            placeholder="Enter Name"
            onChange={handleChange} />
            <input type="email" name="email" value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email" />

            <p>
                {formData.username} - {formData.email}
            </p>
        </form>
    )
}

export default CounterTwo;