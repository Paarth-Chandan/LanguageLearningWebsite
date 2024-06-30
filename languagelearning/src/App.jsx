import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import WatchVideo from "./components/WatchVideo";
import Profile from "./components/Profile";

function App() {
  const courses = [
    {
      id: 1,
      title: "Hindi",
      image: "/images/hindi.webp",
      duration: "3 Weeks Long",
      type: "Free",
      description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
      author: "John Doe",
      rating: 5,
    },
    {
      id: 2,
      title: "French",
      image: "/images/french.jpeg",
      duration: "4 Weeks Long",
      type: "Paid",
      description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
      author: "John Doe",
      rating: 5,
    },
    {
      id: 3,
      title: "Spanish",
      image: "/images/spanish.jpeg",
      duration: "3 Weeks Long",
      type: "Paid",
      description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
      author: "John Doe",
      rating: 5,
    },
    {
      id: 4,
      title: "Chinese",
      image: "/images/chinese.avif",
      duration: "3 Weeks Long",
      type: "Paid",
      description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
      author: "John Doe",
      rating: 5,
    },
    {
      id: 5,
      title: "German",
      image: "/images/german.jpeg",
      duration: "3 Weeks Long",
      type: "Paid",
      description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
      author: "John Doe",
      rating: 5,
    },
    {
      id: 6,
      title: "Arabic",
      image: "/images/arabic.jpeg",
      duration: "3 Weeks Long",
      type: "Paid",
      description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
      author: "John Doe",
      rating: 5,
    },
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses courses={courses} />} />
          <Route
            path="/courses/:id"
            element={<CourseDetail courses={courses} />}
          />
            <Route
              path="/watchvideo/:courseId/:videoId" 
              element={
                <WatchVideo courses={courses}
                />
              }
            />
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
