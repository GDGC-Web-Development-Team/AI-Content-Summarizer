import Navbar from "./Navbar"
import "./styles/register.css"

const LoginComponent = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="signup-left">
          <h1 className="title">Login</h1>
          <p className="subtitle">Redefine productivity</p>
          <form action="#">
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="p-2"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="p-2"
                required
              />
            </div>
            <button type="submit" className="signup-btn">
              Login
            </button>
          </form>
        </div>
        <div className="robot-right">
          <img src="/robot.jpg" alt="AI Robot" className="robot-img" />
        </div>
      </div>
    </>
  )
}

export default LoginComponent
