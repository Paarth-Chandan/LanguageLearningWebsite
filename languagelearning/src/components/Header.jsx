import {
  faArrowRight,
  faBars,
  faSearch,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

Modal.setAppElement("#root");

const customStyles1 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30.5%", // Set the width of the modal
    height: "70%",
    borderRadius: "20px",
  },
  overlay: {
    zIndex: 1000, // Set a high z-index for the overlay as well
  },
};

const customStyles2 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30.5%", // Set the width of the modal
    height: "71%",
    borderRadius: "20px",
  },
  overlay: {
    zIndex: 1000, // Set a high z-index for the overlay as well
  },
};

const Header = () => {
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Get the stored value from localStorage, or default to false if not available
    const storedLoggedIn = window.localStorage.getItem("isLoggedIn");
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  useEffect(() => {
    // Save the isLoggedIn state to localStorage
    window.localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div>
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img
              src="/images/logo.svg"
              width="162"
              height="50"
              alt="EduWeb logo"
            />
          </a>
          <nav className="navbar" data-navbar>
            <div className="wrapper">
              <a href="#" className="logo">
                <img
                  src="images/logo.svg"
                  width="162"
                  height="50"
                  alt="EduWeb logo"
                />
              </a>
              <button
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
              >
                <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
              </button>
            </div>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link" data-nav-link>
                  About
                </a>
              </li>
              <li className="navbar-item">
                <a href="#courses" className="navbar-link" data-nav-link>
                  Courses
                </a>
              </li>
              <li className="navbar-item">
                <a href="#blog" className="navbar-link" data-nav-link>
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                {isLoggedIn ? (
                  <div className="navbar-link">
                    <span
                      onClick={() => setIsLoggedIn(false)}
                      className="span "
                    >
                      <Link to="/profile">View Profile</Link>
                    </span>
                  </div>
                ) : (
                  <span
                    onClick={() => {
                      setSignInVisible(true);
                    }}
                    className="navbar-link hover-underline"
                  >
                    <div className="separator"></div>
                    <span className="span" id="show-signin">
                      Sign In
                    </span>
                  </span>
                )}
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <button
              className="header-action-btn"
              aria-label="toggle search"
              title="Search"
            >
              <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
            </button>
            <button
              className="header-action-btn"
              aria-label="cart"
              title="Cart"
            >
              <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />
              <span className="btn-badge">0</span>
            </button>
            <a href="#" className="btn has-before">
              <span className="span">Try for free</span>
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </a>
            <button
              className="header-action-btn"
              aria-label="open menu"
              data-nav-toggler
            >
              <FontAwesomeIcon icon={faBars} aria-hidden="true" />
            </button>
          </div>
          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
      <Modal
        isOpen={signInVisible}
        onRequestClose={() => setSignInVisible(false)}
        style={customStyles1}
      >
        <SignIn
          setSignInVisible={setSignInVisible}
          setSignUpVisible={setSignUpVisible}
          setIsLoggedIn={setIsLoggedIn}
        />
      </Modal>
      <Modal
        isOpen={signUpVisible}
        onRequestClose={() => setSignUpVisible(false)}
        style={customStyles2}
      >
        <SignUp
          setSignUpVisible={setSignUpVisible}
          setIsLoggedIn={setIsLoggedIn}
        />
      </Modal>
    </div>
  );
};

export default Header;
