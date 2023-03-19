import { useState, useEffect } from "react";
import Container from "../Container";
import ListCourses from "../ListCourses";
import * as API from "../../services/API";

function HomePage() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [dataCourses, setDataCourses] = useState();

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
        {dataCourses && <ListCourses data={dataCourses} />}
      </Container>
    </>
  );
}

export default HomePage;
