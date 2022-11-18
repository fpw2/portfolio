import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import Booki from "../../assets/images/Booki.png";
import ohmyfood from "../../assets/images/ohmyfood.png";
import Fisheye from "../../assets/images/Fisheye.png";
import LesPetitsPlats from "../../assets/images/Les-petits-plats.png";
import Kasa from "../../assets/images/Kasa.png"
import SuperM from "../../assets/images/SuperM.png"

import html5 from "../../assets/icons/html5.ico";
import css3 from "../../assets/icons/css3.ico";
import scss from "../../assets/icons/scss.ico";
import js from "../../assets/icons/js.ico";
import react from "../../assets/icons/react.ico";
import { useDispatch, useSelector } from "react-redux";
import { hover } from "../../features/page.slice";
{/* <FontAwesomeIcon icon="fa-solid fa-share-from-square" /> */}

export default function Work() {
  const dispatch = useDispatch()
  const isHover = useSelector((state) => state.page)
  console.log(isHover)

  return (
    <motion.section 
    className="work"
    exit={{opacity: 0, transition: { duration: .5 } }}
    >
      <div onMouseOver={() => dispatch(hover)} className="work-wrapper">
        <ul>
          <li className="card-work work-1">
            <Link>
              <div className="card-image">
                <img src={Booki} alt={Booki} />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>Booki</h4>
                  <div>
                    <img src={html5} alt={html5} />
                    <img src={css3} alt={css3} />
                  </div>
                </div>
                <div className="card-describe"></div>
              </div>
            </Link>
          </li>
          <li className="card-work work-2">
            <a href="https://fpw2.github.io/ohmyfood" target="_blank" rel="noreferrer">
              <div className="card-image">
                <img src={ohmyfood} alt={ohmyfood} />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>Ohmyfood</h4>
                  <div>
                    <img src={html5} alt={html5} />
                    <img src={scss} alt={scss} />
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="card-work work-3">
            <a href="https://fpw2.github.io/fishEye/" target="_blank" rel="noreferrer">
              <div className="card-image">
                <img src={Fisheye} alt={Fisheye} />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>Fisheye</h4>
                  <div>
                    <img src={html5} alt={html5} />
                    <img src={css3} alt={css3} />
                    <img src={js} alt={js} />
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="card-work work-4">
            <a href="https://fpw2.github.io/les-petits-plats" target="_blank" rel="noreferrer">
              <div className="card-image">
                <img src={LesPetitsPlats} alt={LesPetitsPlats} />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>Les petits plats</h4>
                  <div>
                    <img src={html5} alt={html5} />
                    <img src={css3} alt={css3} />
                    <img src={js} alt={js} />
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="card-work work-5">
            <Link>
              <div className="card-image">
                <img src={Kasa} alt={Kasa} />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>Kasa</h4>
                  <div>
                    <img src={react} alt={react} />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className="card-work work-6">
            <Link>
              <div className="card-image">
                <img src={SuperM} alt={SuperM} />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>SuperM</h4>
                  <div>
                    <img src={react} alt={react} />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
