import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client"
import { MyContext } from "./context/MyContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext.Provider value = "ტექსტი">
      <App />
    </MyContext.Provider>
  </React.StrictMode>
)