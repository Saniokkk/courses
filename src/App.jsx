import { Routes, Route } from "react-router-dom";
import "./App.css";
import * as API from "./services/API";
import ListCourses from "./components/ListCourses";
import { useState, useEffect } from "react";
import Container from "./components/Container";

function App() {
  const [token, setToken] = useState("");
  const [dataCourses, setDataCourses] = useState([]);

  useEffect(() => {
    API.getToken().then(setToken);
    // setDataCourses(data);
  }, []);

  useEffect(() => {
    API.getPreviewListCourses().then(setDataCourses);
  }, [token]);

  if (dataCourses.length > 0) {
    dataCourses.slice(10);
  }
  console.log(dataCourses);
  return (
    <>
      <h1 className="main-title">The best courses</h1>
      <Container className="App">
        {dataCourses.length > 0 && <ListCourses data={dataCourses} />}
      </Container>
    </>
  );
}

export default App;
