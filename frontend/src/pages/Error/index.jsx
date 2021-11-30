import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div className="containerCenter">
      <div>
        <br />
        <h1 className="centerAlign">{t("error.pageUnavailable")}</h1>
        <br />
        <h2 className="centerAlign">
          <Link to="/">{t("error.goBackHome")}</Link>
        </h2>
      </div>
    </div>
  );
};

export default ErrorPage;
