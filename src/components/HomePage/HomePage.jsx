import { useState, useEffect } from "react";
import Container from "../Container";
import style from "./HomePage.module.scss";
import * as API from "../../services/API";
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
