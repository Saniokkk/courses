import { useState, useEffect } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import LessonsList from "../LessonsList/LessonsList";
import style from "./Course.module.scss";

function Course({ course }) {
  const { lessons } = course;
  const [currentVideo, setCurrentVideo] = useState(lessons[0]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className={style.wrapper}>
      <VideoPlayer video={currentVideo} />
      <LessonsList videos={lessons} onSelect={handleVideoSelect} />
    </div>
  );
}

export default Course;
