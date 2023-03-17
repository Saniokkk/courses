import classNames from "classnames";
import CardCourse from "../CardCourse/";
import style from "./ListCourses.module.scss";

export default function ListCourses({data}) {
  const classList = classNames(style.listCourses, "list");
  
  console.log('data: ', typeof(data));
  return (
    <ul className={classList}>
      {data.map((item) => (
        <CardCourse key={item.id} {...item} />
      ))}
    </ul>
  );
}
