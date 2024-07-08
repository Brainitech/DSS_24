import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
          <div class="footer-logo">
                            <a href="index.html"><img src="sds.png" class="img-fluid" alt="logo"></img></a>
                        </div>
          
            <div id="find-us" className="find-us">
              
              <div>
                <h4 className="title">Where to find Us   <FontAwesomeIcon icon={ faMapMarkerAlt } /></h4>
                
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
          <a href="#">Back To Top</a>
        </div>
        <div id ="copyright" class="copyright-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div class="copyright-text">
                        <p>Copyright &copy; 2018, All Right Reserved </p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div class="footer-menu">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Alumni</a></li>
                            <li><a href="#">Sponsors</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
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
