import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand-wrapper">
              <a href="#" className="logo">
                <img src="/images/logo.svg" width="162" height="50" alt="EduWeb logo" />
              </a>
              <form action="" className="newsletter-form">
                <input type="email" name="email_address" placeholder="Enter your email" required className="email-field" />
                <button type="submit" className="btn has-before">
                  <span className="span">Subscribe</span>
                  {/* <IonIcon name="arrow-forward-outline" aria-hidden="true" /> */}
                  <FontAwesomeIcon icon={faArrowRight} aria-hidden="true"/>
                </button>
              </form>
            </div>
            <div className="quicklink-wrapper">
              <ul className="quicklink-list">
                <li>
                  <h3 className="h5">Explore</h3>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Courses</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Instructor</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Events</span>
                  </a>
                </li>
              </ul>
              <ul className="quicklink-list">
                <li>
                  <h3 className="h5">Links</h3>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Contact</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Terms &amp; Conditions</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Faq</span>
                  </a>
                </li>
              </ul>
              <ul className="quicklink-list">
                <li>
                  <h3 className="h5">Category</h3>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Design</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Development</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Marketing</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    <span className="span">Business</span>
                  </a>
                </li>
              </ul>
              <ul className="quicklink-list">
                <li>
                  <h3 className="h5">Social</h3>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    {/* <IonIcon name="logo-facebook" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faFacebook} aria-hidden="true"/>
                    <span className="span">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    {/* <IonIcon name="logo-twitter" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faTwitter} aria-hidden="true"/>
                    <span className="span">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    {/* <IonIcon name="logo-linkedin" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/>
                    <span className="span">Linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    {/* <IonIcon name="logo-youtube" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faYoutube} aria-hidden="true"/>
                    <span className="span">YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="#">EduWeb</a>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer