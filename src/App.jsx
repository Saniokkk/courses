import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect, Suspense } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import * as API from "./services/API";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className="fallback">Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/:courseId"
          element={
            <Suspense fallback={<div className="fallback">Loading...</div>}>
              <DetailsPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
