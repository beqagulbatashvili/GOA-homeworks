import ChildComponent from "../components/ChildComponent";

const App = () => {
    const myObj = { num1: 10, num2: 20}

    return (
        <>
        <ChildComponent name="beqa" surname="gulbatashvili"/>
        <ChildComponent muNum="10" userObj={myObj}/>
        </>
    )
}
export default App;