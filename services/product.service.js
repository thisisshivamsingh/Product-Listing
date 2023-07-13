import axios from "axios";

export const getTokenFromLocal = () => {
  const token = localStorage.getItem("token")?.split(" ")[1];
  return token;
};

export const getToken = async () => {
  try {
    let config = {
      method: "post",
      url: `http://${process.env.NEXT_PUBLIC_API_PATH}/devcore02.cimet.io/v1/generate-token`,
      headers: {
        "Api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    };

    let response = await axios.request(config);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getData = async (token) => {
  try {
    let config = {
      method: "post",
      url: `http://${process.env.NEXT_PUBLIC_API_PATH}/devcore02.cimet.io/v1/plan-list`,
      headers: {
        "Auth-token": token,
        "Api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    };

    let response = await axios.request(config);

    return response;
  } catch (err) {
    console.log(err);
  }
};
