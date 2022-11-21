import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { hover } from "../../features/page.slice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { works } from "../../data/works";

export default function Work() {
  const dispatch = useDispatch();
  const isHover = useSelector((state) => state.page);
  const [isShown, setIsShown] = useState(false);

  return (
    <motion.section
      className="work"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="work-wrapper">
        <ul>
          {works.map((work) => {
            return (
              <li key={work.title} className="card-work work-1">
                <a href={work.link} target="_blank" rel="noreferrer">
                  <div
                    className={`card-image ${isShown ? "hover" : ""}`}
                    // onMouseEnter={() => setIsShown(true)}
                    // onMouseLeave={() => setIsShown(false)}
                    // onMouseEnter={() => setIsShown(true)}
                    // onMouseLeave={() => setIsShown(false)}
                  >
                    <img src={work.img} alt={work.title} />
                    {isShown && (
                      <div className={`card-image-hover ${isShown ? "block" : "none"}`} >
                        Visit the site
                        <FontAwesomeIcon icon={faShareFromSquare} />
                      </div>
                    )}
                  </div>
                </a>
                <div className="card-body">
                  <div className="card-title">
                    <h4>{work.title}</h4>
                    <div>
                      {work.technology.map((technology) => {
                        return <img src={technology} alt={technology}></img>;
                      })}
                    </div>
                  </div>
                  <div className="card-describe"></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
