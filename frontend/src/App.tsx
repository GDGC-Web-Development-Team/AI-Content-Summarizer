import { Routes, Route } from "react-router-dom"
import "./App.css"
import RegisterComponent from "./components/Register"
import Homepage from "./components/LandingPage"

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}

export default App
