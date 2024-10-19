import Navbar from "./Navbar"
import "./styles/register.css"

const RegisterComponent = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="signup-left">
          <h1 className="title">Join the AI Revolution</h1>
          <p className="subtitle">Sign up to supercharge your summaries</p>
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="p-2"
                required
              />
            </div>
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
            <div className="input-group">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="p-2"
                required
              />
            </div>
            <button type="submit" className="signup-btn">
              SIGNUP
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

export default RegisterComponent
