import Info from "./Info";

function App() {
  return (
    <div>
      <Info 
        signedIn={true} 
        myName="ბექა" 
        mySurname="გულბთაშვილი" 
      />
    </div>
  );
}

export default App;
