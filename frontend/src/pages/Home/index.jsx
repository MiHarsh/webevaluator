import React, { useState } from "react";
import Center from "components/Center";
import InputButton from "components/InputButton";
import Loader from "components/Loader";
import endpoints from "constants/endpoints";
import { sendPostRequest } from "shared/sendRequest";
import { Grid, Container } from "@material-ui/core";
import useStyles from "./styles";

const Home = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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
          <div>
            <h5 className={classes.h5}>Great! Your URL is ready to march</h5>
          </div>
          <div>
            <p className={classes.para}>Crawler Overview</p>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4} spacing={2}>
              <div className={classes.grid_div}>
                <p className={classes.para}>Media URLs</p>
                <div className={classes.number_div}>
                  <p className={classes.number_para}>
                    {Object.keys(result[1].data.mediaList).length}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} className={classes.grid} spacing={2}>
              <div className={classes.grid_div}>
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
            <p className={classes.para}>SSL Certifications</p>
          </div>
          <Grid container spacing={2}>
            {result[0].data.data.map((data) => {
              return (
                <Grid item xs={4} md={4} className={classes.grid} spacing={2}>
                  <div className={classes.grid_div}>
                    <p className={classes.para}>{data.CommonName}</p>
                    <p className={classes.para}>Issue Date: {data.NotBefore}</p>
                    <p className={classes.para}>Expiry Date: {data.NotAfter}</p>
                    <p className={classes.para}>ID: {data.SerialNumber}</p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Home;
