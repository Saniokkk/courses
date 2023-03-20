import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import * as API from "../../services/API";
import Container from "../Container";
import Course from "../Course";
import style from "./DetailsPage.module.scss";
import BtnToBack from "../BtnToBack/BtnToBack";

function DetailsPage() {
  const { state } = useLocation();
  const courseId = useParams().courseId;
  const [data, setData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (!token) {
          const token = await API.getToken();
          setToken(token);
        } else {
          const data = await API.getPreviewCourse(courseId);
          setData(data);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [token, courseId]);

  return (
    <>
      {loading ? (
        Loading.circle({
          svgColor: "#ff6b01",
          cssAnimationDuration: 800,
        })
      ) : error ? (
        <>
          {Loading.remove()}
          <h2>Error fetching users</h2>
        </>
      ) : (
        <>
          {Loading.remove()}
          <Container>
            <div className={style.wrapper}>
              <BtnToBack className={style.toBack} />
              <h1 className={style.title}>{data.title}</h1>
              <Course course={data} />
            </div>
          </Container>
        </>
      )}
    </>
  );
}

export default DetailsPage;
