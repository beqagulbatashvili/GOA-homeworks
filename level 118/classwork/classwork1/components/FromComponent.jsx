import { useState } from "react";

function FormComponent() {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(value);
    }

    return (
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="შეიყვანე ტექსტი..."
        />

        <button type="submit">გაგზავნა</button>
        </form>
    );
}

export default FormComponent;
