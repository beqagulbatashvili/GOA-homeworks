import { useState } from "react";

function Info() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
        <form>
            <input 
            type="text" 
            placeholder="Type something..." 
            onChange={handleChange}
            />
        </form>

        <p>{text}</p>
        </div>
    );
}

export default Info;
