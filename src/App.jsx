import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect, Suspense } from "react";
import * as API from "./services/API";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";


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

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage data={dataCourses} />
            </Suspense>
          }
        ></Route>
        <Route
          path="/:courseId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DetailsPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
