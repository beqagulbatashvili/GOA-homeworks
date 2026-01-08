import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Child() {
    const contextValue = useContext(MyContext)

    return <p>{contextValue}</p>
}

export default Child