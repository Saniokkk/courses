import { useState, useEffect } from "react";
import Container from "../Container";
import style from "./HomePage.module.scss";
import * as API from "../../services/API";
import Pagination from "../Pagination";

function HomePage() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [dataCourses, setDataCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (!token) {
        API.getToken().then(setToken);
      } else {
        API.getPreviewListCourses().then(setDataCourses);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [token]);

  return (
    <>
      <h1 className={style.title}>The best courses of our time </h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error fetching users</h2>
      ) : (
        <Container className="App">
          {dataCourses && <Pagination data={dataCourses}></Pagination>}
        </Container>
      )}
    </>
  );
}

export default HomePage;
