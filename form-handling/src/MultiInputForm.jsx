import { useState } from "react"

export default function MultiInputForm() {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        age:""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,    // baki value ko chod kr only jisme change kr rahe hai vahi badle
            [name]: value // jo bhi change kr rahe hai uski updated value yaha print hojaygi
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>MultiInput Form example</h2>

            <input name="name" type="text" placeholder="Name"
            value={formData.name} onChange={handleChange} />
            <br />

            <input name="email" type="email" placeholder="Email"
            value={formData.email} onChange={handleChange} />
            <br />

            <input name="age" type="number" placeholder="Age"
            value={formData.age} onChange={handleChange} />
            <br />

            <button type="submit">Submit</button>
        </form>
    )
}