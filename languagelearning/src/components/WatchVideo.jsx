import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { faCalendar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { LinearProgress } from "@mui/material";
import Header from "./Header";
import { useSelector } from "react-redux";

const WatchVideo = () => {
  const user = useSelector((state) => state.user.user);
  const { courseId, videoId } = useParams();
  const navigate = useNavigate();
  const [courseCompletion, setCourseCompletion] = useState(null);
  const currentVideoId = parseInt(videoId, 10);
  const nextVideoId = currentVideoId + 1;

  useEffect(() => {
    const fetchCourseCompletion = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/courseCompletion/${user.id}/${courseId}`
        );
        setCourseCompletion(response.data);
      } catch (error) {
        console.error("Error fetching course completion data:", error);
      }
    };

    fetchCourseCompletion();
  }, [user.id, courseId, videoId]);

  const handleNextClick = async () => {
    if (courseCompletion && courseCompletion.videosCompleted >= currentVideoId) {
      navigate(`/watchvideo/${courseId}/${nextVideoId}`);
      return;
    }

    const courseCompletionRequest = {
      student: { id: user.id },
      course: { id: courseId },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/courseCompletion/update",
        courseCompletionRequest
      );

      if (response.status === 200) {
        if (currentVideoId === 6) {
          alert("Congratulations! You've finished the course.");
          navigate("/courses");
        } else {
          navigate(`/watchvideo/${courseId}/${nextVideoId}`);
        }
      } else {
        throw new Error("Failed to update course completion.");
      }
    } catch (error) {
      console.error("Error updating course completion:", error);
    }
  };

  const isLastVideo = currentVideoId === 6;
  const progress = courseCompletion
    ? (courseCompletion.videosCompleted / courseCompletion.totalVideos) * 100
    : 0;

  return (
    <div>
      <Header />
      <section className="watch-video">
        <div className="video-container">
          <div className="video">
            <video
              src={`/videos/video-${videoId}.mp4`}
              controls
              poster={`/images/post-${videoId}.png`}
              id="video"
            ></video>
          </div>
          <h3 className="title">Complete HTML tutorial (part {videoId})</h3>
          <div className="title-progress">
            <LinearProgress
              color="success"
              variant="determinate"
              value={progress}
              className="progress-bar"
            />
            <button
              onClick={handleNextClick}
              className="inline-btn next-finish-btn"
            >
              {isLastVideo ? "Finish" : "Next"}
            </button>
          </div>
          <div className="info">
            <p className="date">
              <FontAwesomeIcon icon={faCalendar} />
              <span>22-10-2022</span>
            </p>
            <p className="date">
              <FontAwesomeIcon icon={faHeart} />
              <span>44 likes</span>
            </p>
          </div>
          <div className="tutor">
            <img src="/images/pic-2.jpg" alt="" />
            <div>
              <h3>John Deo</h3>
              <span>Developer</span>
            </div>
          </div>
          <form className="flex">
            <Link to="/playlist" className="inline-btn">
              View Playlist
            </Link>
            <button type="submit">
              <FontAwesomeIcon icon={faHeart} />
              <span>Like</span>
            </button>
          </form>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
          </p>
        </div>
      </section>
      <section className="comments">
        <h1 className="heading">5 Comments</h1>
        <form className="add-comment">
          <h3>Add Comments</h3>
          <textarea
            name="comment_box"
            placeholder="Enter your comment"
            required
            maxLength="1000"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="Add Comment"
            className="inline-btn"
            name="add_comment"
          />
        </form>
        <h1 className="heading">User Comments</h1>
        <div className="box-container">
          <div className="box">
            <div className="user">
              <img src="/images/pic-1.jpg" alt="" />
              <div>
                <h3>Bob</h3>
                <span>22-10-2022</span>
              </div>
            </div>
            <div className="comment-box">This is a comment</div>
            <form className="flex-btn">
              <input
                type="submit"
                value="Edit Comment"
                name="edit_comment"
                className="inline-option-btn"
              />
              <input
                type="submit"
                value="Delete Comment"
                name="delete_comment"
                className="inline-delete-btn"
              />
            </form>
          </div>
          <div className="box">
            <div className="user">
              <img src="/images/pic-2.jpg" alt="" />
              <div>
                <h3>John Deo</h3>
                <span>22-10-2022</span>
              </div>
            </div>
            <div className="comment-box">Awesome tutorial! Keep going!</div>
          </div>
          {/* Additional comments */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WatchVideo;
