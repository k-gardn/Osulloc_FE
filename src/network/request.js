import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.36.123.198",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = sessionStorage.getItem("Access_token");
    const refreshToken = sessionStorage.getItem("Refresh_token");
    if (accessToken !== null && refreshToken !== null) {
      config.headers.common["Authorization"] = `${accessToken}`;
      config.headers.common["Refresh-token"] = `${refreshToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const logout = async () => {
  try {
    console.log();
    await instance.get(`/api/auth/member/logout`);
    sessionStorage.removeItem("Access_token");
    sessionStorage.removeItem("Refresh_token");
    localStorage.removeItem("email");
    localStorage.removeItem("myCartNum");
    alert("로그아웃 되었습니다.");
  } catch (error) {
    console.log("에러:", error);
  }
};
