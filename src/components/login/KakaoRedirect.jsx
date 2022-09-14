import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoRedirect = () => {
  const navigate = useNavigate();
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + `/api/oauth/kakao?code=${code}`)
      .then((res) => {
        const ACCESS_TOKEN = res.headers["access-token"];
        const kakaoToken = res.data.data.kakaoToken;
        const refreshToken = res.headers["refresh-token"];
        const email = res.data.data.email;
        sessionStorage.setItem("Access_token", ACCESS_TOKEN);
        sessionStorage.setItem("kakaoToken", kakaoToken);
        sessionStorage.setItem("Refresh_token", refreshToken);
        localStorage.setItem("email", email);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default KakaoRedirect;
