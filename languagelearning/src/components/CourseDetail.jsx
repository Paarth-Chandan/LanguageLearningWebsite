import React from "react";
import { Link, useParams } from "react-router-dom";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import Footer from "./Footer";

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  // Handle cases where course is not found
  if (!course) {
    return <div>Course not found!</div>;
  }

  const videos = [
    {
      id: 1,
      thumb: "/images/post-1-1.png",
    },
    {
      id: 2,
      thumb: "/images/post-1-2.png",
    },
    {
      id: 3,
      thumb: "/images/post-1-3.png",
    },
    {
      id: 4,
      thumb: "/images/post-1-4.png",
    },
    {
      id: 5,
      thumb: "/images/post-1-5.png",
    },
    {
      id: 6,
      thumb: "/images/post-1-6.png",
    },
  ];

  const enrolled = false; // Replace with logic to determine enrollment status
  const isLoggedIn = true; // Replace with logic to determine login status

  return (
    <div>
      <Header />
      <section className="playlist-details">
        <h1 className="heading">Playlist Details</h1>

        <div className="row">
          <div className="column">
            <Link to="/teacherprofile" className="inline-btn">
              view profile
            </Link>

            <div className="thumb">
              <img src={course.image} alt="" />
              <span> videos</span>
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <img src="/images/pic-3.jpg" alt="" />
              <div>
                <h3>{course.tutor}</h3>
                <span>{course.date}</span>
              </div>
            </div>

            <div className="details">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              {isLoggedIn ? (
                <form action="" method="post" className="save-playlist">
                  {!enrolled ? (
                    <button type="submit">
                      <FontAwesomeIcon icon={faBookmark} /> <span>Enroll</span>
                    </button>
                  ) : (
                    <button disabled>
                      <FontAwesomeIcon icon={faBookmark} />{" "}
                      <span>Enrolled</span>
                    </button>
                  )}
                </form>
              ) : (
                <Link to="/login" className="inline-btn">
                  Login to Enroll
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="playlist-videos">
        <h1 className="heading">Playlist Videos</h1>

        <div className="box-container">
          {videos.map((video) => (
            <Link to={`/watchvideo/${course.id}/${video.id}`} className="box" key={video.id}>
              <img src={video.thumb} alt="" />
              <h3>
                {course.title} Part {video.id}
              </h3>
            </Link>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CourseDetail;
