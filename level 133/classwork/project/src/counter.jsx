import { useContext } from "react";
import { CountContext } from "./CountContext";

function Counter() {
    const { count, setCount } = useContext(CountContext);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default Counter;