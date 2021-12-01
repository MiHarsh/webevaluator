import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuspenseLoader from "components/SuspenseLoader";
import Header from "components/Header";
import Footer from "components/Footer";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HomePage = lazy(() => import("pages/Home"));
const TableView = lazy(() => import("pages/Tables"));
const AboutPage = lazy(() => import("pages/About"));

const RoutesList = () => {
  return (
    <SuspenseLoader style={{ height: "80vh" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route exact path="/tables" element={<TableView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SuspenseLoader>
  );
};

export default RoutesList;
