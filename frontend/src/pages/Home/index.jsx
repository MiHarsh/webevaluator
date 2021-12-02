import React, { useState } from "react";
import Center from "components/Center";
import InputButton from "components/InputButton";
import Loader from "components/Loader";
import endpoints from "constants/endpoints";
import { sendPostRequest } from "shared/sendRequest";
import { Grid, Container, Modal } from "@material-ui/core";

// trial purpose
import TableGrid from "pages/Tables";
// ends here
import useStyles from "./styles";

const Home = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setLoading(true);
    const promiseList = [];
    promiseList.push(
      sendPostRequest(endpoints.ssl(), {
        URL: value,
      })
    );
    promiseList.push(
      sendPostRequest(endpoints.crawl(), {
        URL: value,
      })
    );
    promiseList.push(
      sendPostRequest(endpoints.cookieChecker(), {
        url: value,
      })
    );
    promiseList.push(
      sendPostRequest(endpoints.ada(), {
        url: value,
      })
    );
    promiseList.push(
      sendPostRequest(endpoints.tenon(), {
        url: value,
      })
    );
    Promise.all(promiseList)
      .then((data) => {
        setResult(data);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <Center className={classes.root}>
        <InputButton
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Center>
      {loading && <Loader />}
      {result && (
        <Container fixed>
          <div className={classes.fixed_div}>
            <h5 className={classes.h5}>Great! Your URL is ready to march</h5>
          </div>
          <div>
            <p className={classes.para_head}>Crawler Overview</p>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4} spacing={2}>
              <div
                className={classes.grid_div}
                onClick={handleOpen}
                onKeyDown={handleOpen}
                aria-hidden="true"
              >
                <p className={classes.para}>Media URLs</p>
                <div className={classes.number_div}>
                  <p className={classes.number_para}>
                    {Object.keys(result[1].data.mediaList).length}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} className={classes.grid} spacing={2}>
              <div
                className={classes.grid_div}
                onClick={handleOpen}
                onKeyDown={handleOpen}
                aria-hidden="true"
              >
                <p className={classes.para}>Site URLs</p>
                <div className={classes.number_div}>
                  <p className={classes.number_para}>
                    {Object.keys(result[1].data.urlList).length}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <div>
            <p className={classes.para_head}>SSL Certifications</p>
          </div>
          <Grid container spacing={2}>
            {result[0].data.data.map((data) => {
              return (
                <Grid item xs={4} md={4} className={classes.grid} spacing={2}>
                  <div
                    className={classes.grid_div}
                    onClick={handleOpen}
                    onKeyDown={handleOpen}
                    aria-hidden="true"
                  >
                    <p className={classes.para}>{data.CommonName}</p>
                    <p className={classes.para}>Issue Date: {data.NotBefore}</p>
                    <p className={classes.para}>Expiry Date: {data.NotAfter}</p>
                    <p className={classes.para}>ID: {data.SerialNumber}</p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <div>
            <p className={classes.para_head}>Ada Compliant Errors</p>
          </div>
          <Grid container spacing={2}>
            {result[3].data.data.error.map((data) => {
              return (
                <Grid item xs={4} md={4} className={classes.grid} spacing={2}>
                  <div
                    className={classes.grid_div}
                    onClick={handleOpen}
                    onKeyDown={handleOpen}
                    aria-hidden="true"
                  >
                    <p className={classes.para}>Issue: {data.name}</p>
                    <p className={classes.para}>
                      Description: {data.description}
                    </p>
                    <p className={classes.para}>Error Count: {data.count}</p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <div>
            <p className={classes.para_head}>Ada Compliant Warnings</p>
          </div>
          <Grid container spacing={2}>
            {result[3].data.data.warning.map((data) => {
              return (
                <Grid item xs={4} md={4} className={classes.grid} spacing={2}>
                  <div
                    className={classes.grid_div}
                    onClick={handleOpen}
                    onKeyDown={handleOpen}
                    aria-hidden="true"
                  >
                    <p className={classes.para}>Issue: {data.name}</p>
                    <p className={classes.para}>
                      Description: {data.description}
                    </p>
                    <p className={classes.para}>Warnings Count: {data.count}</p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <div>
            <p className={classes.para_head}>WCAG Guidelines Errors</p>
          </div>
          <Grid container spacing={2}>
            {result[4].data.data.map((data) => {
              return (
                <Grid item xs={4} md={4} className={classes.grid} spacing={2}>
                  <div
                    className={classes.grid_div}
                    onClick={handleOpen}
                    onKeyDown={handleOpen}
                    aria-hidden="true"
                  >
                    <p className={classes.para}>{data.resultTitle}</p>
                    <p className={classes.para}>Level: {data.level[0]}</p>
                    <p className={classes.para}>Issue ID: {data.issueID}</p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {/* <div className={classes.paper}>
              <h2>Text in a modal</h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div> */}

            <TableGrid />
          </Modal>
        </Container>
      )}
    </>
  );
};

export default Home;
