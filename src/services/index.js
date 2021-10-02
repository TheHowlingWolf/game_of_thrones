import axios from "axios";

export const callAxios = (url) =>
  axios
    .get(url)
    .then((response) => {
      if (response.data) return response.data;
      return null;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });

export default null;
