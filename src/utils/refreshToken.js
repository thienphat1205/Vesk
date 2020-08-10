import { getToken, setToken } from "./token";
import URL from "./url";
import { CONFIG } from "../config/config";

const BASE_URL = CONFIG.BASE_URL;

const handleRefreshToken = async () => {
  const url = `${BASE_URL}${URL.REFRESH_TOKEN}`;
  const { refreshToken } = getToken();
  let headers = { "Content-Type": "application/json" };
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify({ refreshToken })
  };
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  if (data.statusCode === 200) {
    setToken({
      token: data.accessToken,
      refreshToken
    });
  }

  return data;
};

export default handleRefreshToken;
