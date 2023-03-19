import { useState } from "react";
import style from "./VideoPlayer.module.scss";

function VideoPlayer({ video }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    localStorage.setItem(video.id, currentTime);
    setCurrentTime(currentTime);
  };

  return (
    <div className={style.playerWrapper}>
      <h3 className={style.title}>
        <span className={style.titleLes}>Lesson #{video.order}</span>
        {video.title}
      </h3>
      <video
        width="600"
        height="300"
        controls
        poster={video.previewImageLink}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={(event) => {
          setDuration(event.target.duration);
          const savedTime = localStorage.getItem(video.id);
          if (savedTime) {
            event.target.currentTime = savedTime;
          }
        }}
      >
        <source src={video.link} type="application/x-mpegURL" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}

export default VideoPlayer;
