import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const decreaseByTwo = () => setCount(count - 2);

    return (
        <div>
        <p>Count: {count}</p>

        <button 
            onclick = {increase}
            disabled={count > 10}
        >
            Increase +1
        </button>

        <button 
            
            disabled={count < -10}
        >
            Decrease -1
        </button>

        <button onClick={decreaseByTwo}>
            Decrease -2
        </button>
        </div>
    );
}
