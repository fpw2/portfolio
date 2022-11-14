import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="skills">
      <motion.div
        className="skills-wrapper html"
        exit={{ x: -2000, transition: { duration: .5 } }}
      >
        <div className="skills-name">HTML && CSS</div>
        <div className="skills-describe">
          I aim for performance, simplicity and integrity in my work. I'm a
          stickler for a slick build process and understandable. I write CSS
          modules predominately in SASS and when not working vanilla HTML,
          solutions such as React's JSX are my choice for DOM manipulation.
        </div>
      </motion.div>
      <motion.div
        className="skills-wrapper js"
        exit={{ x: -2000, transition: { duration: .5 } }}
      >
        <div className="skills-name">JAVASCRIPT</div>
        <div className="skills-describe">
          I have been building websites daily for over a year in JavaScript,
          whether with a model or from an existing project. I work on vanilla
          and mainly on React/React Native/Redux framework with good
          capabilities.
        </div>
      </motion.div>
      <motion.div 
        className="skills-wrapper"
        exit={{opacity: 0}}
      >
        <div className="title-knowledge">
          <p>Knowledge </p>
        </div>
        <div>
          <ul className="skills-knowledge">
            <li className="wordpress">WORDPRESS</li>
            <li className="figma">FIGMA</li>
            <li className="php">PHP</li>
            <li className="symfony">SYMFONY</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
