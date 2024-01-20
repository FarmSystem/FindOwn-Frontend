import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 로그인 api모듈
export const loginInstance = axios.create(apiClient.defaults);
loginInstance.defaults.baseURL += `/api/v2/users`;

// export {
//   loginInstance,
//   apiClient as default,
// };