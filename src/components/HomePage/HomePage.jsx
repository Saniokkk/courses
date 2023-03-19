import { useState, useEffect } from "react";
import Container from "../Container";
import ListCourses from "../ListCourses";
import * as API from "../../services/API";
import Pagination from "../Pagination";

function HomePage() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [dataCourses, setDataCourses] = useState();
  console.log("dataCourses: ", dataCourses);

  useEffect(() => {
    if (!token) {
      API.getToken().then(setToken);
    } else {
      API.getPreviewListCourses().then(setDataCourses);
    }
  }, [token]);

  return (
    <>
      <h1 className="main-title">The best courses</h1>
      <Container className="App">
        {dataCourses && <Pagination data={dataCourses}></Pagination>}
      </Container>
    </>
  );
}

export default HomePage;
