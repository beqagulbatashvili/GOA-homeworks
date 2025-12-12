import { useState } from "react";

const FormComp = () => {
    const [form, setForm] = useState({
        name: "",
        surname: "",
        birth: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formInformation", JSON.stringify(form));
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
            />
            <br />

            <input
            name="surname"
            placeholder="Enter surname"
            onChange={handleChange}
            />
            <br />

            <input
            name="birth"
            type="date"
            onChange={handleChange}
            />
            <br />

            <input
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            />
            <br />

            <input
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            />
            <br />

            <button type="submit">Click here to submit the form</button>
        </form>
        </div>
    );
};

export default FormComp;
