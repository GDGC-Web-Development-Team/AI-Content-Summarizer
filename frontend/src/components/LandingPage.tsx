import { motion } from "framer-motion"
import "./styles/homepage.css"
import Navbar from "./Navbar"

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />

      <div className="hero-section">
        <div className="text-content">
          <p className="tagline">Lightning-fast.</p>
          <h1>Your AI-Powered Content Summarizer</h1>
          <p>Sum up your big essays or articles right away!</p>
          <div className="buttons">
            <button className="start-button">Start creating</button>
            <button className="guide-button">Guide</button>
          </div>
        </div>
        <motion.div
          className="robot-image"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        >
          <img src="/robot.jpg" alt="AI Robot" />
        </motion.div>
      </div>
    </div>
  )
}

export default Homepage
