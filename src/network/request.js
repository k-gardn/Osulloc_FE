import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.36.123.198",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    const accessToken = sessionStorage.getItem("Access_token");
    const refreshToken = sessionStorage.getItem("Refresh_token");
    if (accessToken !== null && refreshToken !== null) {
      axios.defaults.headers.common["Authorization"] = `${accessToken}`; // 되겠지
      axios.defaults.headers.common["Refresh-token"] = `${refreshToken}`;
    }
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// access_token: setCookie("access_token"),
// refresh_token: setCookie("refresh_token"),

// instance.interceptors.request.use(
// 	function (config) {
// 		// 요청 바로 직전
// 		// axios 설정값에 대해 작성합니다.
// 		return config
// 	},
// 	function (error) {
// 		// 요청 에러 처리를 작성합니다.
// 		return Promise.reject(error)
// 	}
// )

// instance.interceptors.response.use(
// 	function (response) {
// 		return response
// 	},

// 	function (error) {
// 		return Promise.reject(error)
// 	}
// )
