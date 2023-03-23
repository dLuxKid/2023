import axios from "axios";


export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/js",
  },
});


export const postLogin = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error
  }
};

export const postSignup = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error
  }
};
