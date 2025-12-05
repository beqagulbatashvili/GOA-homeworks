import Hello from "./components/Hello";
import HelloButton from "./components/HelloButton";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <Hello name="beqa" />
      <HelloButton onClick={handleClick} />
    </div>
  );
}

export default App;
