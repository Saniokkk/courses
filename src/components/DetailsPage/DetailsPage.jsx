import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import * as API from "../../services/API";
import Container from "./../Container/Container";

function DetailsPage() {
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const courseId = useParams().courseId;

  useEffect(() => {
    API.getPreviewCourse(courseId).then(setData);
  }, []);

  useEffect(() => {
   console.log(data);
  }, [data]);


  return (
    data && (
      <>
        <Container className="App">
          <div>Receive</div>
        </Container>
      </>
    )
  );
}

export default DetailsPage;
