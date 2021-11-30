import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuspenseLoader from "components/SuspenseLoader";
import Header from "components/Header";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HomePage = lazy(() => import("pages/Home"));

const RoutesList = () => {
  return (
    <SuspenseLoader style={{ height: "80vh" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </SuspenseLoader>
  );
};

export default RoutesList;
