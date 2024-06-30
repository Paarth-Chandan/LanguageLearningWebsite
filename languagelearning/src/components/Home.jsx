import React, { useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendar,
  faCheckCircle,
  faChevronUp,
  faPerson,
  faPlayCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <main>
        <article>
          <section
            className="section hero has-bg-image"
            id="home"
            aria-label="home"
            style={{ backgroundImage: `url(images/hero-bg.svg)` }}
          >
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 section-title">
                  The Best Program to <span className="span">Enroll</span> for
                  Exchange
                </h1>
                <p className="hero-text">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit.
                </p>
                <a href="#" className="btn has-before">
                  <span className="span">Find courses</span>
                  {/* <IonIcon name="arrow-forward-outline" aria-hidden="true" /> */}
                  <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                </a>
              </div>
              <figure className="hero-banner">
                <div
                  className="img-holder one"
                  style={{ "--width": 270, "--height": 300 }}
                >
                  <img
                    src="images/hero-banner-1.jpg"
                    width="270"
                    height="300"
                    alt="hero banner"
                    className="img-cover"
                  />
                </div>
                <div
                  className="img-holder two"
                  style={{ "--width": 240, "--height": 370 }}
                >
                  <img
                    src="images/hero-banner-2.jpg"
                    width="240"
                    height="370"
                    alt="hero banner"
                    className="img-cover"
                  />
                </div>
                <img
                  src="images/hero-shape-1.svg"
                  width="380"
                  height="190"
                  alt=""
                  className="shape hero-shape-1"
                />
                <img
                  src="images/hero-shape-2.png"
                  width="622"
                  height="551"
                  alt=""
                  className="shape hero-shape-2"
                />
              </figure>
            </div>
          </section>

          <section className="section category" aria-label="category">
            <div className="container">
              <p className="section-subtitle">Categories</p>
              <h2 className="h2 section-title">
                Online <span className="span">Classes</span> For Remote
                Learning.
              </h2>
              <p className="section-text">
                Consectetur adipiscing elit sed do eiusmod tempor.
              </p>
              <ul className="grid-list">
                <li>
                  <div
                    className="category-card"
                    style={{ "--color": "170, 75%, 41%" }}
                  >
                    <div className="card-icon">
                      <img
                        src="images/category-1.svg"
                        width="40"
                        height="40"
                        loading="lazy"
                        alt="Online Degree Programs"
                        className="img"
                      />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Online Degree Programs
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">7 Courses</span>
                  </div>
                </li>
                <li>
                  <div
                    className="category-card"
                    style={{ "--color": "351, 83%, 61%" }}
                  >
                    <div className="card-icon">
                      <img
                        src="images/category-2.svg"
                        width="40"
                        height="40"
                        loading="lazy"
                        alt="Non-Degree Programs"
                        className="img"
                      />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Non-Degree Programs
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">4 Courses</span>
                  </div>
                </li>
                <li>
                  <div
                    className="category-card"
                    style={{ "--color": "229, 75%, 58%" }}
                  >
                    <div className="card-icon">
                      <img
                        src="images/category-3.svg"
                        width="40"
                        height="40"
                        loading="lazy"
                        alt="Off-Campus Programs"
                        className="img"
                      />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Off-Campus Programs
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">8 Courses</span>
                  </div>
                </li>
                <li>
                  <div
                    className="category-card"
                    style={{ "--color": "42, 94%, 55%" }}
                  >
                    <div className="card-icon">
                      <img
                        src="images/category-4.svg"
                        width="40"
                        height="40"
                        loading="lazy"
                        alt="Hybrid Distance Programs"
                        className="img"
                      />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Hybrid Distance Programs
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">8 Courses</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <img
                  src="images/about-banner.jpg"
                  width="660"
                  height="670"
                  loading="lazy"
                  alt="about banner"
                  className="w-100"
                />
                <img
                  src="images/about-shape-1.svg"
                  width="120"
                  height="115"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-1"
                />
                <img
                  src="images/about-shape-2.svg"
                  width="115"
                  height="85"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-2"
                />
                <img
                  src="images/about-shape-3.svg"
                  width="26"
                  height="26"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-3"
                />
                <img
                  src="images/about-shape-4.svg"
                  width="18"
                  height="18"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-4"
                />
              </figure>
              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">
                  The Leading Global <span className="span">Educating</span>{" "}
                  Marketplace.
                </h2>
                <p className="section-text">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <ul className="about-list">
                  <li className="about-item">
                    {/* <IonIcon name="checkmark-circle-outline" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faCheckCircle} aria-hidden="true" />
                    <span className="span">
                      Learn new skills online with top educators
                    </span>
                  </li>
                  <li className="about-item">
                    {/* <IonIcon name="checkmark-circle-outline" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faCheckCircle} aria-hidden="true" />
                    <span className="span">
                      Learn new skills online with top educators
                    </span>
                  </li>
                  <li className="about-item">
                    {/* <IonIcon name="checkmark-circle-outline" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faCheckCircle} aria-hidden="true" />
                    <span className="span">
                      Learn new skills online with top educators
                    </span>
                  </li>
                </ul>
                <div className="about-buttons">
                  <a href="#" className="btn has-before">
                    <span className="span">Find courses</span>
                    {/* <IonIcon name="arrow-forward-outline" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                  </a>
                  <a href="#" className="btn has-before">
                    <span className="span">Contact us</span>
                    {/* <IonIcon name="arrow-forward-outline" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section course" id="courses" aria-label="course">
            <div className="container">
              <p className="section-subtitle">Popular Courses</p>
              <h2 className="h2 section-title">
                Pick A Course To <span className="span">Get Started</span>
              </h2>
              <ul className="grid-list">
                <li>
                  <div className="course-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 370, "--height": 260 }}
                    >
                      <img
                        src="images/hindi.webp"
                        width="370"
                        height="260"
                        loading="lazy"
                        alt="Artificial Intelligence Fundamental Startup"
                        className="img-cover"
                      />
                    </figure>
                    <div className="abs-badge">
                      {/* <IonIcon name="calendar-outline" aria-hidden="true" /> */}
                      <FontAwesomeIcon icon={faCalendar} aria-hidden="true" />
                      <span className="span">3 Weeks Long</span>
                    </div>
                    <div className="card-content">
                      <span className="badge">Free</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Hindi
                        </a>
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor consec tur elit adicing sed umod
                        tempor.
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="author">
                        <a href="#" className="author-link">
                          <span className="author-name">John Doe</span>
                        </a>
                      </div>
                      <div className="rating">
                        {/* <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" /> */}
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="course-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 370, "--height": 260 }}
                    >
                      <img
                        src="images/french.jpeg"
                        width="370"
                        height="260"
                        loading="lazy"
                        alt="Full-Stack Web Development for Beginners"
                        className="img-cover"
                      />
                    </figure>
                    <div className="abs-badge">
                      {/* <IonIcon name="calendar-outline" aria-hidden="true" /> */}
                      <FontAwesomeIcon icon={faCalendar} aria-hidden="true" />
                      <span className="span">4 Weeks Long</span>
                    </div>
                    <div className="card-content">
                      <span className="badge">Paid</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">
                          French
                        </a>
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor consec tur elit adicing sed umod
                        tempor.
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="author">
                        {/* <img src="./assets/images/course-instructor-img.jpg" width="50" height="50" loading="lazy" alt="Instructor Image" className="img" /> */}
                        <a href="#" className="author-link">
                          <span className="author-name">John Doe</span>
                        </a>
                      </div>
                      <div className="rating">
                        {/* <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" /> */}
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="course-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 370, "--height": 260 }}
                    >
                      <img
                        src="images/spanish.jpeg"
                        width="370"
                        height="260"
                        loading="lazy"
                        alt="Ethical Hacking Masterclass Training"
                        className="img-cover"
                      />
                    </figure>
                    <div className="abs-badge">
                      {/* <IonIcon name="calendar-outline" aria-hidden="true" /> */}
                      <FontAwesomeIcon icon={faCalendar} aria-hidden="true" />
                      <span className="span">3 Weeks Long</span>
                    </div>
                    <div className="card-content">
                      <span className="badge">Paid</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Spanish
                        </a>
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor consec tur elit adicing sed umod
                        tempor.
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="author">
                        {/* <img src="./assets/images/course-instructor-img.jpg" width="50" height="50" loading="lazy" alt="Instructor Image" className="img" /> */}
                        <a href="#" className="author-link">
                          <span className="author-name">John Doe</span>
                        </a>
                      </div>
                      <div className="rating">
                        {/* <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" />
                        <IonIcon name="star" aria-hidden="true" /> */}
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <Link to="/courses">
                <button className="btn">Show all courses</button>
              </Link>
            </div>
          </section>

          <section
            className="section video has-bg-image"
            aria-label="video"
            style={{ backgroundImage: `url(images/video-bg.png)` }}
          >
            <div className="container">
              <div className="video-card">
                <div
                  className="video-banner img-holder has-after"
                  style={{ "--width": 1000, "--height": 560 }}
                >
                  <img
                    src="images/video-banner.jpg"
                    width="1000"
                    height="560"
                    loading="lazy"
                    alt="video banner"
                    className="img-cover"
                  />
                  <button className="play-btn" aria-label="play video">
                    {/* <IonIcon name="play-circle" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={faPlayCircle} aria-hidden="true" />
                  </button>
                </div>
                <img
                  src="images/video-shape-2.png"
                  width="162"
                  height="166"
                  loading="lazy"
                  alt=""
                  className="shape video-shape-1"
                />
                <img
                  src="images/video-shape-2.png"
                  width="118"
                  height="115"
                  loading="lazy"
                  alt=""
                  className="shape video-shape-2"
                />
              </div>
            </div>
          </section>

          <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
              <p className="section-subtitle">From The Blog Post</p>
              <h2 className="h2 section-title">
                News &amp; <span className="span">Articles</span>
              </h2>
              <ul className="grid-list">
                <li>
                  <div className="blog-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 370, "--height": 300 }}
                    >
                      <img
                        src="images/blog-1.jpg"
                        width="370"
                        height="300"
                        loading="lazy"
                        alt="Beginners guide to start live stream"
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-content">
                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Beginners guide to start live stream
                        </a>
                      </h3>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          {/* <IonIcon name="calendar-outline" aria-hidden="true" /> */}
                          <FontAwesomeIcon
                            icon={faCalendar}
                            aria-hidden="true"
                          />
                          <span className="span">07 Jan, 2022</span>
                        </li>
                        <li className="card-meta-item">
                          {/* <IonIcon name="person-outline" aria-hidden="true" /> */}
                          <FontAwesomeIcon icon={faPerson} aria-hidden="true" />
                          <span className="span">Jeny William</span>
                        </li>
                      </ul>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectur adipiscing elit
                        sed.
                      </p>
                      <a href="#" className="card-link">
                        <span className="span">Read more</span>
                        {/* <IonIcon name="arrow-forward-outline" aria-hidden="true" /> */}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 370, "--height": 300 }}
                    >
                      <img
                        src="images/blog-2.jpg"
                        width="370"
                        height="300"
                        loading="lazy"
                        alt="Complete guide to start live stream"
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-content">
                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Complete guide to start live stream
                        </a>
                      </h3>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          {/* <IonIcon name="calendar-outline" aria-hidden="true" /> */}
                          <FontAwesomeIcon
                            icon={faCalendar}
                            aria-hidden="true"
                          />
                          <span className="span">10 Jan, 2022</span>
                        </li>
                        <li className="card-meta-item">
                          {/* <IonIcon name="person-outline" aria-hidden="true" /> */}
                          <FontAwesomeIcon icon={faPerson} aria-hidden="true" />
                          <span className="span">Jeny William</span>
                        </li>
                      </ul>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectur adipiscing elit
                        sed.
                      </p>
                      <a href="#" className="card-link">
                        <span className="span">Read more</span>
                        {/* <IonIcon name="arrow-forward-outline" aria-hidden="true" /> */}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>

      <Footer />

      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        {/* <IonIcon name="chevron-up" aria-hidden="true" /> */}
        <FontAwesomeIcon icon={faChevronUp} aria-hidden="true" />
      </a>
    </div>
  );
};

export default Home;