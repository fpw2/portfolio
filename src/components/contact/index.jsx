import logo from "../../assets/logo.png";
import timbre from "../../assets/images/timbre.png";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"

export default function Contact() {

  return (
    <section className="contact">
      <motion.div 
        className="border-ext"
        exit={{ x: -2000, transition: { duration: 0.5 }}}
      >
        <div className="border-int">
          <div className="contact-left">
            <div className="contact-header">
              <img src={logo} alt={logo} width="100px" />
              <div>
                <p className="contact-name">fabienP</p>
                <p className="contact-job">Web developer</p>
              </div>
            </div>
            <div className="contact-describe">
              <div className="contact-location">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="xl"
                  className="icon-location"
                />
                <p className="location">Bordeaux</p>
              </div>
              <div className="contact-mail">
                <FontAwesomeIcon icon={faEnvelope} size="xl" className="icon-mail" />
                <p className="mail">fabienP.dev@gmail.com</p>
              </div>
              <div className="contact-linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="xl" className="icon-linkedin" />
                <p className="linkedin">www.linkedin.com/in/fabien-pergaud</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-header">
              <div className="contact-timbre">
                <img src={timbre} width="80px" alt={timbre} />
              </div>
            </div>
            <div>
              <p className="linkedin"></p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
