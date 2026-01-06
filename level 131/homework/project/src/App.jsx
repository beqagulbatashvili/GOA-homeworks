import useCounter from "./hooks/useCounter"

function App() {
  const [counter, increase, decrease, reset] = useCounter()

  return (
    <div>
      <p>{counter}</p>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
