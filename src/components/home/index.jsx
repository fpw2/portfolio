import { Link } from "react-router-dom";
import { motion } from "framer-motion"

export default function Home() {
  return (
      <section 
        className="home"
      >
        <motion.div 
          className="home-title"
          exit={{ opacity: [0.8,0.5,0], transition: {duration: .5} }}
        >
          <div className="home-name">
            <p className="hai">HAI, IM FABIEN</p>
          </div>
          <p className="home-describe">I'M A WEB DEVELOPER ORIENTED REACT </p>
          <div className="learn-more">
            <Link to="/skills">LEARN MORE</Link>
          </div>
        </motion.div>
      </section>
  );
}
