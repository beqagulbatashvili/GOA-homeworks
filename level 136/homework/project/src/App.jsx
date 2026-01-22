import { Routes, Route, Link, Navigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Profile from "./components/Profile"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile/7">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
