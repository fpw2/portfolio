import { motion } from "framer-motion";
import { works } from "../../data/works";
import Work from "./Work";

export default function Works() {
  return (
    <motion.section
      className="works"
    >
      <div className="works-wrapper">
        <ul>
          {works.map((work) => (
            <Work 
              key={work.id}
              work={work}
            />
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
