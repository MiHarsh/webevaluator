import React, { useState, useEffect } from "react";
import endpoints from "constants/endpoints";
import { sendPostRequestSetter } from "shared/sendRequest";
import { useLocation } from "react-router-dom";
import Container from "components/Container";
import Loader from "components/Loader";
import useStyles from "./styles";

const Report = () => {
  const query = new URLSearchParams(useLocation().search);
  const url = query.get("url");
  const [crawl, setCrawl] = useState(null);
  const [ssl, setSsl] = useState(null);
  const [cookie, setCookie] = useState(null);
  const [ada, setAda] = useState(null);
  const [sniffer, setSniffer] = useState(null);
  useEffect(() => {
    const promiseList = [];
    promiseList.push(
      sendPostRequestSetter(
        endpoints.ssl(),
        {
          URL: url,
        },
        setSsl
      )
    );
    promiseList.push(
      sendPostRequestSetter(
        endpoints.crawl(),
        {
          URL: url,
        },
        setCrawl
      )
    );
    promiseList.push(
      sendPostRequestSetter(
        endpoints.cookieChecker(),
        {
          url,
        },
        setCookie
      )
    );
    promiseList.push(
      sendPostRequestSetter(
        endpoints.ada(),
        {
          url,
        },
        setAda
      )
    );
    promiseList.push(
      sendPostRequestSetter(
        endpoints.sniffer(),
        {
          url,
        },
        setSniffer
      )
    );
    Promise.all(promiseList)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.heading}>Crawler Overview:</h1>
      <div className={classes.flex}>
        <Container>
          <h2 className={classes.heading2}>
            Media URL:{" "}
            {crawl ? Object.keys(crawl?.mediaList)?.length : <Loader />}
          </h2>
        </Container>
        <Container>
          <h2 className={classes.heading2}>
            Site URL: {crawl ? Object.keys(crawl?.urlList)?.length : <Loader />}
          </h2>
        </Container>
      </div>
      <h1 className={classes.heading}>SSL Overview:</h1>
      <div className={classes.flex}>
        {ssl.data.map((certificate) => (
          <Container key={certificate.SerialNumber}>
            <h2 className={classes.heading2}>
              Expiry Date: {certificate.NotAfter}
            </h2>
            <h2 className={classes.heading2}>
              Issue Date: {certificate.NotBefore}
            </h2>
            <h2 className={classes.heading2}>
              CommonName: {certificate.CommonName}
            </h2>
            <h2 className={classes.heading2}>
              DNS Names: {certificate.DNSNames?.join(", ")}
            </h2>
          </Container>
        ))}
      </div>
      {cookie && "cookie"}
      {ada && "ada"}
      {sniffer && "sniffer"}
    </>
  );
};

export default Report;
