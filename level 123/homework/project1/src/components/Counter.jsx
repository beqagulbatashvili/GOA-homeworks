import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Counter App</h1>

        <h2 style={{ fontSize: "40px" }}>{count}</h2>

        <div style={{ marginTop: "20px" }}>
            <button
            onClick={handleIncrease}
            style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px 20px",
                border: "none",
                marginRight: "10px",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            >
            Increment
            </button>

            <button
            onClick={handleDecrease}
            style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            >
            Decrement
            </button>
        </div>
        </div>
    );
}

export default Counter;
