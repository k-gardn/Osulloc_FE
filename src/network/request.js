import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
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
      config.headers.common["authorization"] = `${accessToken}`;
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
    if (sessionStorage.getItem("kakaoToken") === null) {
      await instance.get(`/api/auth/member/logout`);
      sessionStorage.removeItem("Access_token");
      sessionStorage.removeItem("Refresh_token");
      localStorage.removeItem("email");
      alert("로그아웃 되었습니다.");
    } else {
      axios.defaults.headers.common["kakaoToken"] = sessionStorage.getItem("kakaoToken");
      await instance.get(`/api/oauth/kakao/logout`);
      sessionStorage.removeItem("Access_token");
      sessionStorage.removeItem("Refresh_token");
      sessionStorage.removeItem("kakaoToken");
      localStorage.removeItem("email");
      alert("로그아웃 되었습니다.");
    }
  } catch (error) {
    console.log("에러:", error);
  }
};
