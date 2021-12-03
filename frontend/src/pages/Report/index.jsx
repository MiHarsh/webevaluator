import React, { useState, useEffect } from "react";
import endpoints from "constants/endpoints";
import { sendPostRequestSetter } from "shared/sendRequest";
import { useLocation } from "react-router-dom";
import Container from "components/Container";
import Loader from "components/Loader";
import CustomModal from "components/CustomModal";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ScrollableTabs from "components/Tabs";
import {
  sslColumns,
  sslId,
  cookiesColumns,
  cookiesId,
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
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState(null);
  const [uniqueId, setUniqueId] = useState("id");
  const handleClick = (row, column, uniqueid) => {
    setRows(row);
    setColumns(column);
    setUniqueId(uniqueid);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
    <div className={classes.root}>
      <h1 className={classes.heading}>URL getting scanned: {url}</h1>
      <div className={classes.flex}>
        <Container>
          <p className={classes.p}>
            Media URLs:{" "}
            {crawl ? Object.keys(crawl?.mediaList)?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p className={classes.p}>
            Site URLs:{" "}
            {crawl ? Object.keys(crawl?.urlList)?.length : <Loader />}
          </p>
        </Container>
      </div>
      <h1 className={classes.heading}>SSL Certificates:</h1>
      <div className={classes.flex}>
        {ssl ? (
          ssl?.data?.map((certificate) => (
            <Container
              onClick={() => handleClick(certificate, sslColumns, sslId)}
            >
              <p className={classes.p}>Expiry Date: {certificate.NotAfter}</p>
              <p className={classes.p}>Issue Date: {certificate.NotBefore}</p>
              <p className={classes.p}>CommonName: {certificate.CommonName}</p>
              <p className={classes.p}>
                DNS Names: {certificate.DNSNames?.join(", ")}
              </p>
            </Container>
          ))
        ) : (
          <Loader />
        )}
      </div>
      <h1 className={classes.heading}>Cookies:</h1>
      <div className={classes.flex}>
        <Container>
          <p className={classes.p}>
            Deny Cookies Option Present:{" "}
            {cookie ? `${cookie?.data?.["user-can_deny"]}` : <Loader />}
          </p>
        </Container>
        <Container>
          <p className={classes.p}>
            Accept Cookies Option Present:{" "}
            {cookie ? `${cookie?.data?.["consent-popup"]}` : <Loader />}
          </p>
        </Container>
      </div>
      <div className={classes.flex}>
        <Container
          onClick={() =>
            handleClick(
              cookie?.data?.["initial-cookies"],
              cookiesColumns,
              cookiesId
            )
          }
        >
          <p className={classes.p}>
            Initial Cookies:{" "}
            {cookie ? cookie?.data?.["initial-cookies"]?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p className={classes.p}>
            Cookies After Accept:{" "}
            {cookie ? (
              cookie?.data?.["cookies-consent_accepted"]?.length || 0
            ) : (
              <Loader />
            )}
          </p>
        </Container>
        <Container>
          <p className={classes.p}>
            Cookies After Deny:{" "}
            {cookie ? (
              cookie?.data?.["cookies-consent_denied"]?.length || 0
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
          <p className={classes.p}>
            WCAG2A Errors:{" "}
            {sniffer ? sniffer?.result?.WCAG2A?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p className={classes.p}>
            WCAG2AA Errors:{" "}
            {sniffer ? sniffer?.result?.WCAG2AA?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p className={classes.p}>
            WCAG2AAA Errors:{" "}
            {sniffer ? sniffer?.result?.WCAG2AAA?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p className={classes.p}>
            Section 508 Errors:{" "}
            {sniffer ? sniffer?.result?.Section508?.length : <Loader />}
          </p>
        </Container>
      </div>
      <h1 className={classes.heading}>Other Accessibility Checks:</h1>
      <div className={classes.flex}>
        <Container>
          <p className={classes.p}>
            Errors: {ada ? ada?.data?.error?.length : <Loader />}
          </p>
        </Container>
        <Container>
          <p className={classes.p}>
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
        >
          Download Complete Report
        </Button>
      </div>
      <CustomModal
        handleClose={handleClose}
        open={open}
        rows={rows}
        columns={columns}
        uniqueId={uniqueId}
      />
      <ScrollableTabs />
    </div>
  );
};

export default Report;
