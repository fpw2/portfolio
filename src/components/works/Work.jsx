import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Work({ work }) {
  return (
    <section className="work">
      <motion.div>
      <li key={work.title} className={`card-work work-${work.id}`}>
        <Link to={"/works/" + work.id}>
          <div className="card-image">
            <img src={work.img} alt={work.title} />
          </div>
        </Link>
      </li>
      </motion.div>
    </section>
  );
}

