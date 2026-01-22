import React, { useState, Profiler } from "react";

function CounterItem({ value, onIncrement }) {
  console.log("CounterItem render", value);
  return (
    <div>
      <span>{value}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function onRenderCallback(id, phase, actualDuration, baseDuration) {
    console.log("Profiler");
    console.log("id:", id);
    console.log("phase:", phase);
    console.log("actualDuration:", actualDuration);
    console.log("baseDuration:", baseDuration);
  }

  return (
    <Profiler id="CounterProfiler" onRender={onRenderCallback}>
      <CounterItem value={count} onIncrement={() => setCount(count + 1)} />
    </Profiler>
  );
}

export default App;
