import React, { useState } from "react";
import Center from "components/Center";
import InputButton from "components/InputButton";
import Loader from "components/Loader";
import endpoints from "constants/endpoints";
import { sendPostRequest } from "shared/sendRequest";
import useStyles from "./styles";

const Home = () => {
  const [value, setValue] = useState("");
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
        console.log("data inside promiseList is", data);
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
    </>
  );
};

export default Home;
