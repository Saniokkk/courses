import style from "./LessonsList.module.scss";
import { Link } from "react-router-dom";

function LessonsList({ videos, onSelect }) {
  return (
    <ol className={style.list}>
      {videos.map((video) => (
        <li
          className={style.item}
          key={video.id}
          onClick={() => onSelect(video)}
        >
          <Link className={style.link}>
            <h4 className={style.title}>{video.title}</h4>
            <p className={style.text}>Duration: {video.duration}</p>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default LessonsList;
