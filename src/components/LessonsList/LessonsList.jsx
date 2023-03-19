import { useState, useEffect } from "react";
import style from "./LessonsList.module.scss";

function LessonsList({ videos, onSelect }) {
  return (
    <ol className={style.list}>
      {videos.map((video) => (
        <li
          className={style.item}
          key={video.id}
          onClick={() => onSelect(video)}
        >
          <h4 className={style.title}>{video.title}</h4>
          <p className={style.text}>Duration: {video.duration}</p>
        </li>
      ))}
    </ol>
  );
}

export default LessonsList;
