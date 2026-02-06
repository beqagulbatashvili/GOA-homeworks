import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback.jsx'

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <TaskProvider>
        <Router>
          <nav className="bg-blue-500 p-4 text-white flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </TaskProvider>
    </ErrorBoundary>
  )
}
