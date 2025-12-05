import Button from "./components/Button1";

function App() {

  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;
