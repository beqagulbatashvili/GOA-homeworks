import { useState } from "react";

function Counter() {
        const [count, setcount] = useState(0);

        function handleClick(){
            setcount(count + 1);
        }

        return(
        <div>
            <p>count: {count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Counter;