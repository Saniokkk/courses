import { Link, useLocation } from "react-router-dom";
import style from "./BtnToBack.module.scss";

function BtnToBack() {
  const { state } = useLocation();

  return (
    <Link className={style.btnToBack} to={state ? state : "/"}>
      &larr;
    </Link>
  );
}

export default BtnToBack;
