import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"

function App() {
  return (
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl mt-10">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
  )
}

export default App
