import logo from "../../assets/logo.png";
import timbre from "../../assets/images/timbre.png";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const modal = document.querySelector("#modal-success")
  window.onclick = function(event) {
    if(event.target === modal) {
      modal.style.display = "none"
    }
  }

  function handleClickClose() {
    modal.style.display = "none"
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_59ohl28",
        "template_ouyj8av",
        form.current,
        "FhbE3hmQrngp_NcUq"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            modal.style.display = "block"
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact">
      <motion.div
        className="border-ext"
        exit={{ x: -2000, transition: { duration: 0.5 } }}
      >
        <div className="border-int">
          <div className="contact-left">
            <div className="contact-header">
              <img src={logo} alt={logo} width="100px" />
              <div>
                <p className="contact-name">Fabien</p>
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
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  className="icon-mail"
                />
                <p className="mail">fabienp.dev@gmail.com</p>
              </div>
              <div className="contact-linkedin">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  className="icon-linkedin"
                />
                <p className="linkedin">www.linkedin.com/in/fabien-pergaud</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-header">
              <div className="contact-timbre">
                <img src={timbre} width="60px" alt={timbre} />
              </div>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label htmlFor="name-company">Name/Company</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name/company"
                  required
                />
                <label htmlFor="object">Email</label>
                <input
                  type="text"
                  name="email"
                  id="object"
                  placeholder="Your email"
                  required
                />
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Your message"
                  required
                ></textarea>
                <button type="submit">
                  SEND
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="lg"
                    className="arrow-right"
                  />
                </button>
              </form>
              <div id="modal-success" className="modal">
                <div className="modal-content">
                  <p>Message send</p>
                  <span onClick={handleClickClose} className="close">&times;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
