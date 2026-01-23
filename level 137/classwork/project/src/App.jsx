import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Info from "./pages/Info";
import Navbar from "./components/Navibar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;