import { useState } from "react";

function Div() {
    const [color, setColor] = useState("");

    function handleChange(event) {
        setColor(event.target.value);
    }

    return (
        <div
        style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: color,
        }}
        >
        <form>
            <input
            type="text"
            placeholder="enter color"
            onChange={handleChange}
            />
        </form>
        </div>
    );
}

export default Div;
