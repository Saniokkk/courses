import classNames from "classnames";
import CardCourse from "../CardCourse/";
import style from "./ListCourses.module.scss";

export default function ListCourses({
  firstContentIndex,
  lastContentIndex,
  data,
}) {
  const classList = classNames(style.listCourses, "list");

  return (
    <ul className={classList}>
      {data.slice(firstContentIndex, lastContentIndex).map((item) => (
        <CardCourse key={item.id} {...item} />
      ))}
    </ul>
  );
}
