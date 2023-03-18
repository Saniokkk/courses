import Container from "../Container";
import ListCourses from "../ListCourses";

function HomePage({ data }) {
  console.log("data: ", data);

  return (
    <>
      <h1 className="main-title">The best courses</h1>
      <Container className="App">
        {data && <ListCourses data={data} />}
      </Container>
    </>
  );
}

export default HomePage;
