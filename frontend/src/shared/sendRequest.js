import axios from "axios";

export const sendPostRequest = (url, data) =>
  axios({
    method: "POST",
    url,
    data,
  })
    .then((response) => {
      console.log("response is", response);
      return response;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

export const sendGetRequest = (url) =>
  axios({
    method: "POST",
    url,
  })
    .then((response) => {
      console.log("response is", response);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
