import React, { useEffect, useState } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import usePagination from "../hooks/usePagination";
import ListCourses from "../ListCourses";
import style from "./Pagination.module.scss";
import * as API from "../../services/API";
//add input for specific page
function Pagination({ data }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [dataCourses, setDataCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (!token) {
          const token = await API.getToken();
          setToken(token);
        } else {
          const data = await API.getPreviewListCourses();
          setDataCourses(data);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);
  // useEffect(() => {
  //   try {
  //     if (!token) {
  //       API.getToken().then(setToken);
  //     } else {
  //       API.getPreviewListCourses().then(setDataCourses);
  //     }
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [token]);
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
    count: dataCourses?.length,
  });
  return (
    <div className={style.App}>
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
            data={dataCourses}
          />
        </>
      )}
    </div>
  );
}

export default Pagination;
