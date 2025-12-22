import { useState } from "react";
import CounterView from "../presentational/CounterView"

function CounterContainer() {
    const [count, setcount] = useState(0);

    const decrease = () => {
        setcount(count - 1)
    };

    return <CounterView count={count} decrease={decrease}/>
}

export default CounterContainer;