import { Routes, Route } from "react-router-dom"
import "./App.css"
import RegisterComponent from "./components/Register"
import Homepage from "./components/LandingPage"
import LoginComponent from "./components/Login"

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  )
}

export default App
