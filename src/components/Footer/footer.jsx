import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const sendEmail = () => {}
  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail()
  }

  return (
    <body>
      <footer id="footer">
        <div id="contact">
          <div>
            <div id="contact-us">
              <h4 className="title">Contact Us</h4>
              <p>sds@bitmesra.ac.in</p>
            </div>
            <div id="find-us" className="find-us">
              <div>
                <h4 className="title">Where to find Us</h4>
                <p>
                  Birla Institute of Technology, Mesra
                  <br />
                  Ranchi, JH
                  <br />
                  835215, India
                </p>
              </div>
              <div id="follow-us">
                <h4 className="title">Follow Us</h4>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/Society-for-Data-Science-BIT-Mesra-107499150681960">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/society-for-data-science-bit-mesra">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sds.bitm/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="get-in-touch" className="get-in-touch">
            <h4 className="title">Get in touch</h4>
            <div className="personal">
              <input type="text" placeholder="Your Name" />

              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Your Message" />
            <button onClick={handleSubmit}>Send</button>
            <br />
          </div>
        </div>
        <br />
        <div className="first-panel mx-auto">
          <a href="#">Back To Top</a>
        </div>
        <div id="copyright">
          Copyright ©2024 All rights reserved | <span style={{ color: "white" }}>Society for Data Science</span>
        </div>
      </footer>
    </body>
  )
}

export default Footer
