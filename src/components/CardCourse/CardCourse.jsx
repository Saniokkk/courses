import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import style from "./CardCourse.module.scss";

function CardCourse({
  id,
  title,
  lessonsCount,
  rating,
  previewImageLink,
  meta: { skills },
}) {
  const { state } = useLocation();

  return (
    <li key={id} className={style.cardCourse}>
      <Link to={id} state={state} className={style.linkCourse}>
        <div className={style.picWrapper}>
          <img
            className={style.pic}
            src={`${previewImageLink}/cover.webp`}
            alt={title}
          />
        </div>
        <h3 className={style.title}>{title}</h3>
        <div className={style.wrapper}>
          <p className={style.count}>
            <span className={style.accentText}>Count:</span>
            {lessonsCount}
          </p>
          <p className={style.rating}>
            <span className={style.accentText}>Rating:</span> {rating}
          </p>
          <p className={style.skills}>
            <span className={style.accentText}>Skills:</span>{" "}
            {skills ? skills.join(", ") : "is absent"}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default CardCourse;
