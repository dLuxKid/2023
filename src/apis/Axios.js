import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     "Content-Type": "application/js",
//   },
// });

export const postData = async (img) => {
  try {
    const response = await axios.post("", img);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
