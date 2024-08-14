import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  const sendEmail = () => {}
  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail()
  }

  return (
    <>
      <footer id="footer">
        <div id="contact">
          <div>
            {/* <div className="footer-logo">
              <a href="index.html">
                <img src="sds.png" className="img-fluid" alt="logo"></img>
              </a>
            </div> */}

            <div id="find-us" className="find-us ml-2">
              <div>
                <h4 className="title">
                  Where to find Us <FontAwesomeIcon icon={faMapMarkerAlt} />
                </h4>

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
                      <FontAwesomeIcon icon={faSquareFacebook} />
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
          <a href="#home">Back To Top</a>
        </div>
        <div id="copyright" className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left align-center">
                <div className="copyright-text">
                  <p>Copyright &copy; 2018, All Right Reserved </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
