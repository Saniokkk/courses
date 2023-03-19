import style from "./Header.module.scss";
import Container from "../Container";
function Header() {
  return (
    <>
      <header className={style.header}>
        <Container>
          <p className={style.text}>GenCourses</p>
        </Container>
      </header>
    </>
  );
}

export default Header;
