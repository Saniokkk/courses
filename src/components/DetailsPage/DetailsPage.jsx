import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import * as API from "../../services/API";
import Container from "./../Container/Container";
import Course from "./../Course/Course";
import style from "./DetailsPage.module.scss";

function DetailsPage() {
  const { state } = useLocation();
  const courseId = useParams().courseId;
  const [data, setData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      API.getToken().then(setToken);
    } else {
      API.getPreviewCourse(courseId).then(setData);
    }
  }, [token, courseId]);

  return (
    data && (
      <>
        <Container>
          <div className={style.wrapper}>
            <h1 className={style.title}>{data.title}</h1>
            <Course course={data} />
          </div>
        </Container>
      </>
    )
  );
}

export default DetailsPage;
