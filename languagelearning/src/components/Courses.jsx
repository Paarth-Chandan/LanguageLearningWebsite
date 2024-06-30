import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Courses = ({ courses }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <section className="section course" id="courses" aria-label="course">
        <div className="container">
          <p className="section-subtitle">Popular Courses</p>
          <h2 className="h2 section-title">
            Pick A Course To <span className="span">Get Started</span>
          </h2>
          <ul className="grid-list">
            {courses.map((course) => (
              <Link to={`/courses/${course.id}`} className="card-link">
                <div className="card-banner">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="img-cover"
                  />
                </div>
                <div className="abs-badge">
                  <span>{course.duration}</span>
                </div>
                <div className="card-content">
                  <span className="badge">{course.type}</span>
                  <h3 className="card-title">{course.title}</h3>
                  <p className="card-text">{course.description}</p>
                </div>
                <div className="card-footer">
                  <div className="author">
                    <span className="author-name">{course.author}</span>
                  </div>
                  <div className="rating">
                    {/* You can display the rating stars here */}
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
