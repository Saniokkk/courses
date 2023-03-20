import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import LessonsList from "../LessonsList/LessonsList";
import style from "./Course.module.scss";

function Course({ course }) {
  const { lessons } = course;
  const sortLessons = lessons.sort((a, b) => a.order - b.order);
  const [currentVideo, setCurrentVideo] = useState(sortLessons[0]);

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
