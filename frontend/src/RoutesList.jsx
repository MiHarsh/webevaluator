import React, { lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SuspenseLoader from "components/SuspenseLoader";
import Header from "components/Header";
import Footer from "components/Footer";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HomePage = lazy(() => import("pages/Home"));
const TableView = lazy(() => import("pages/Table"));
const AboutPage = lazy(() => import("pages/About"));
const ReportPage = lazy(() => import("pages/Report"));

const RoutesList = () => {
  return (
    <SuspenseLoader style={{ height: "80vh" }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/report" component={ReportPage} />
          <Route path="*" component={ErrorPage} />
          <Route exact path="/tables" component={TableView} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </SuspenseLoader>
  );
};

export default RoutesList;
