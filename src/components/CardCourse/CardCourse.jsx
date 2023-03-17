import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./CardCourse.module.scss";

function CardCourse({
  id,
  title,
  lessonsCount,
  rating,
  previewImageLink,
  meta: { skills },
}) {
  return (
    <li key={id} className={style.cardCourse}>
      {/* <Link> */}
      <img
        className={style.pic}
        src={`${previewImageLink}/cover.webp`}
        alt={title}
      />
      <div className={style.wrapper}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.count}>Count: {lessonsCount}</p>
        <p className={style.rating}>Rating: {rating}</p>
        <p className={style.skills}>
          Skills: {skills ? skills.join(", ") : "is absent"}
        </p>
      </div>
      {/* </Link> */}
    </li>
  );
}

export default CardCourse;
