import style from "./Header.module.scss";
import Container from "../Container";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className={style.header}>
        <Container>
          <Link to="/" className={style.text}>
            GenCourses
          </Link>
        </Container>
      </header>
    </>
  );
}

export default Header;
