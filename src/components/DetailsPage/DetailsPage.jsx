import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import * as API from "../../services/API";
import Container from "./../Container/Container";

function DetailsPage() {
  const { state } = useLocation();
  const courseId = useParams().courseId;
  const [data, setData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  // const [] = data;

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
        <Container className="App">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div>
            <video
              src={data.meta.courseVideoPreview.link}
              poster={data.previewImageLink}
              width="640"
              controls
              autoplay
              loop
              preload="auto"
            >
              Your browser does not support the <code>audio</code> element.
            </video>
          </div>
        </Container>
      </>
    )
  );
}

export default DetailsPage;
