import { useState, useEffect } from "react";

function Counter() {
  const [ count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log(count);
  }, [count]);


  return (
    <div>
      <p>num:{count}</p>
      <button onClick={increase}>click</button>
    </div>
  )
}

export default Counter;