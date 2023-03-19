import React, { useEffect, useState } from "react";
import axios from "axios";
import usePagination from "../hooks/usePagination";
import ListCourses from "../ListCourses";
import style from "./Pagination.module.scss";
//add input for specific page
function Pagination({ data }) {
  console.log("data: ", data);

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: data.length,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          "https://random-data-api.com/api/users/random_user?size=100"
        );
        setPeople(data.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className={style.App}>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error fetching users</h2>
      ) : (
        <>
          <div className={style.pagination}>
            <p className={style.text}>
              {page}/{totalPages}
            </p>
            <button
              onClick={prevPage}
              className={`page ${page === 1 && "disabled"}`}
            >
              &larr;
            </button>
            <button
              onClick={() => setPage(1)}
              className={`page ${page === 1 && "disabled"}`}
            >
              1
            </button>
            {gaps.before ? "..." : null}
            {/* @ts-ignore */}
            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                key={el}
                className={`page ${page === el ? "active" : ""}`}
              >
                {el}
              </button>
            ))}
            {gaps.after ? "..." : null}
            <button
              onClick={() => setPage(totalPages)}
              className={`page ${page === totalPages && "disabled"}`}
            >
              {totalPages}
            </button>
            <button
              onClick={nextPage}
              className={`page ${page === totalPages && "disabled"}`}
            >
              &rarr;
            </button>
          </div>
          <ListCourses
            firstContentIndex={firstContentIndex}
            lastContentIndex={lastContentIndex}
            data={data}
          />
        </>
      )}
    </div>
  );
}

export default Pagination;
