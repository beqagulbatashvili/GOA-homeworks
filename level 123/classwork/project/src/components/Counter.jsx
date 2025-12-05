import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increaseByTwo = () => {
        setCount(count + 2);
    };

    const resetToZero = () => {
        setCount(0);
    };

    return (
        <div className="counter">
        <p className="counter__value">Count: {count}</p>
        <div className="counter__buttons">
            <button onClick={increaseByTwo}>Increase +2</button>
            <button onClick={resetToZero}>Reset to 0</button>
        </div>
        </div>
    );
}
