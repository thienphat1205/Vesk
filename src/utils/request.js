import { getToken } from "../utils/token";
import handleRefreshToken from "../utils/refreshToken";
import { CONFIG } from "../config/config";

const BASE_URL = CONFIG.BASE_URL;

const request = async (url, method = "GET", payload, checkAuth) => {
  const urlAPI = `${BASE_URL}${url}`;
  const payloadRequestRefreshToken = { urlAPI, method, payload };
  const { token } = await getToken();

  const body = payload ? JSON.stringify({ ...payload }) : undefined;
  let headers = { "Content-Type": "application/json" };
  if (!checkAuth) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`
    };
  }
  const requestOptions = {
    method,
    headers,
    body
  };

  const response = await callAPI(
    urlAPI,
    requestOptions,
    checkAuth,
    payloadRequestRefreshToken
  );
  return response;
};

const callAPI = async (urlAPI, requestOptions, checkAuth, payloadCallBack) => {
  const { urlAPI: url, method, payload } = payloadCallBack;
  const response = await fetch(urlAPI, requestOptions);
  let data = await response.json();
  if (data.statusCode === 401 && !checkAuth) {
    const newDataToken = await handleRefreshToken();
    if (newDataToken.statusCode === 200) {
      const body = payload ? JSON.stringify({ ...payload }) : undefined;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${newDataToken.accessToken}`
      };
      const requestOptions = {
        method,
        headers,
        body
      };
      const response = await fetch(url, requestOptions);
      data = await response.json();
    } else {
      data = {
        statusCode: 401,
        message: "Token Expried"
      };
    }
  }
  return data;
};

export default request;
