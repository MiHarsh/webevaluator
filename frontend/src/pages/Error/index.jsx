import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import "./index.css";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div className="containerCenter">
      <div>
        <ExclamationTriangleFill
          color="#FF0000"
          size={120}
          className="centerAlign"
        />
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
