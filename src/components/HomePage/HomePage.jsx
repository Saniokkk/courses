import Container from "../Container";
import style from "./HomePage.module.scss";
import Pagination from "../Pagination";

function HomePage() {


  return (
    <>
      <h1 className={style.title}>The best courses of our time </h1>
      <Container className="App">
        <Pagination></Pagination>
      </Container>
    </>
  );
}

export default HomePage;
