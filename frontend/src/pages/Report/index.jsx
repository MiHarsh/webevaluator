import React, { useState, useEffect, useRef } from "react";
import endpoints from "constants/endpoints";
import axios from "axios";
import { sendPostRequestSetter } from "shared/sendRequest";
import { useLocation } from "react-router-dom";
import Container from "components/Container";
import Loader from "components/Loader";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import fileDownload from "js-file-download";
import ScrollableTabs from "components/ScrollableTabs";
import {
  sslColumns,
  sslId,
  cookiesColumns,
  cookiesId,
  adaColumn,
  adaId,
  wcagColumns,
  section508Columns,
  snifferId,
} from "constants/columns";
import useStyles from "./styles";

const Report = () => {
  const query = new URLSearchParams(useLocation().search);
  const url = query.get("url");
  const [crawl, setCrawl] = useState(null);
  const [ssl, setSsl] = useState(null);
  const [cookie, setCookie] = useState(null);
  const [ada, setAda] = useState(null);
  const [sniffer, setSniffer] = useState(null);
  const tableRef = useRef(null);

  const scrollDown = () => {
    tableRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleDownload = () => {
    axios({
      url: endpoints.download(),
      method: "POST",
      data: {
        url,
      },
      responseType: "blob",
    }).then((response) => {
      fileDownload(response.data, "report.pdf");
    });
  };
  const [mapping, setMapping] = useState({
    1: {
      id: 1,
      title: "SSL Certificates",
      columns: sslColumns,
      uniqueId: sslId,
      rows: [],
    },
    2: {
      id: 2,
      title: "Initial Cookies",
      columns: cookiesColumns,
      uniqueId: cookiesId,
      rows: [],
    },
    3: {
      id: 3,
      title: "Accepted Cookies",
      columns: cookiesColumns,
      uniqueId: cookiesId,
      rows: [],
    },
    4: {
      id: 4,
      title: "Denied Cookies",
      columns: cookiesColumns,
      uniqueId: cookiesId,
      rows: [],
    },
    5: {
      id: 5,
      title: "WCAG2A",
      columns: wcagColumns,
      uniqueId: snifferId,
      rows: [],
    },
    6: {
      id: 6,
      title: "WCAG2AA",
      columns: wcagColumns,
      uniqueId: snifferId,
      rows: [],
    },
    7: {
      id: 7,
      title: "WCAG2AAA",
      columns: wcagColumns,
      uniqueId: snifferId,
      rows: [],
    },
    8: {
      id: 8,
      title: "Section 508",
      columns: section508Columns,
      uniqueId: snifferId,
      rows: [],
    },
    9: {
      id: 9,
      title: "Accessibility Error",
      columns: adaColumn,
      uniqueId: adaId,
      rows: [],
    },
    10: {
      id: 10,
      title: "Accessibility Warnings",
      columns: adaColumn,
      uniqueId: adaId,
      rows: [],
    },
  });
  useEffect(() => {
    setMapping((prev) => {
      return {
        ...prev,
        1: {
          id: 1,
          title: "SSL Certificates",
          columns: sslColumns,
          uniqueId: sslId,
          rows: ssl?.data || [],
        },
      };
    });
  }, ssl);
  useEffect(() => {
    setMapping((prev) => {
      return {
        ...prev,
        2: {
          id: 2,
          title: "Initial Cookies",
          columns: cookiesColumns,
          uniqueId: cookiesId,
          rows: cookie?.data?.initialCookies || [],
        },
        3: {
          id: 3,
          title: "Accepted Cookies",
          columns: cookiesColumns,
          uniqueId: cookiesId,
          rows: cookie?.data?.consentAcceptedCookies || [],
        },
        4: {
          id: 4,
          title: "Denied Cookies",
          columns: cookiesColumns,
          uniqueId: cookiesId,
          rows: cookie?.data?.consentDeniedCookies || [],
        },
      };
    });
  }, cookie);
  useEffect(() => {
    setMapping((prev) => {
      return {
        ...prev,
        5: {
          id: 5,
          title: "WCAG2A",
          columns: wcagColumns,
          uniqueId: snifferId,
          rows: sniffer?.result?.WCAG2A || [],
        },
        6: {
          id: 6,
          title: "WCAG2AA",
          columns: wcagColumns,
          uniqueId: snifferId,
          rows: sniffer?.result?.WCAG2AA || [],
        },
        7: {
          id: 7,
          title: "WCAG2AAA",
          columns: wcagColumns,
          uniqueId: snifferId,
          rows: sniffer?.result?.WCAG2AAA || [],
        },
        8: {
          id: 8,
          title: "Section 508",
          columns: section508Columns,
          uniqueId: snifferId,
          rows: sniffer?.result?.Section508 || [],
        },
      };
    });
  }, sniffer);
  useEffect(() => {
    setMapping((prev) => {
      return {
        ...prev,
        9: {
          id: 9,
          title: "Accessibility Error",
          columns: adaColumn,
          uniqueId: adaId,
          rows: ada?.data?.error || [],
        },
        10: {
          id: 10,
          title: "Accessibility Warnings",
          columns: adaColumn,
          uniqueId: adaId,
          rows: ada?.data?.warning || [],
        },
      };
    });
  }, [ada]);
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
    Promise.allSettled(promiseList)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setMapping([]);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>URL getting scanned: {url}</h1>
      <div className={classes.flex}>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Media URLs:{" "}
            {crawl ? Object.keys(crawl?.mediaList)?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Site URLs:{" "}
            {crawl ? Object.keys(crawl?.urlList)?.length : <Loader />}
          </p>
        </Container>
      </div>
      <h1 className={classes.heading}>SSL Certificates:</h1>
      <div className={classes.flex}>
        {ssl ? (
          ssl?.data?.map((certificate) => (
            <Container>
              <div
                onClick={scrollDown}
                onKeyDown={scrollDown}
                aria-hidden="true"
              >
                <p className={classes.p}>Expiry Date: {certificate.NotAfter}</p>
                <p className={classes.p}>Issue Date: {certificate.NotBefore}</p>
                <p className={classes.p}>
                  CommonName: {certificate.CommonName}
                </p>
                <p className={classes.p}>
                  DNS Names: {certificate.DNSNames?.join(", ")}
                </p>
              </div>
            </Container>
          ))
        ) : (
          <Loader />
        )}
      </div>
      <h1 className={classes.heading}>Cookies:</h1>
      <div className={classes.flex}>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Cookies Consent Asked:{" "}
            {cookie ? `${cookie?.data?.consentAsked}` : <Loader />}
          </p>
        </Container>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Deny Cookies Option Present:{" "}
            {cookie ? `${cookie?.data?.denyConsent}` : <Loader />}
          </p>
        </Container>
      </div>
      <div className={classes.flex}>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Initial Cookies:{" "}
            {cookie ? cookie?.data?.initialCookies?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Cookies After Accept:{" "}
            {cookie ? (
              cookie?.data?.consentAcceptedCookies?.length || 0
            ) : (
              <Loader />
            )}
          </p>
        </Container>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Cookies After Deny:{" "}
            {cookie ? (
              cookie?.data?.consentDeniedCookies?.length || 0
            ) : (
              <Loader />
            )}
          </p>
        </Container>
      </div>
      <h1 className={classes.heading}>
        Web Content Accessibility Guidelines (WCAG) Checks:
      </h1>
      <div className={classes.flex}>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            WCAG2A Errors:{" "}
            {sniffer ? sniffer?.result?.WCAG2A?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            WCAG2AA Errors:{" "}
            {sniffer ? sniffer?.result?.WCAG2AA?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            WCAG2AAA Errors:{" "}
            {sniffer ? sniffer?.result?.WCAG2AAA?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Section 508 Errors:{" "}
            {sniffer ? sniffer?.result?.Section508?.length : <Loader />}
          </p>
        </Container>
      </div>
      <h1 className={classes.heading}>Other Accessibility Checks:</h1>
      <div className={classes.flex}>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Errors: {ada ? ada?.data?.error?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p
            className={classes.p}
            onClick={scrollDown}
            onKeyDown={scrollDown}
            aria-hidden="true"
          >
            Warnings: {ada ? ada?.data?.warning?.length : <Loader />}
          </p>
        </Container>
      </div>
      <div className={classes.button_div}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={handleDownload}
        >
          Download Complete Report
        </Button>
      </div>
      <div ref={tableRef} />
      <ScrollableTabs mapping={mapping} />
    </div>
  );
};

export default Report;
