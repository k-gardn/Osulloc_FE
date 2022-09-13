import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoRedirect = () => {
  const navigate = useNavigate();
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(
    () =>
      async function kakaologin() {
        console.log("시작되고있는가");
        await axios
          .get(`http://3.36.123.198/api/oauth/kakao?code=${code}`)
          .then((res) => {
            console.log(res);
            const ACCESS_TOKEN = res.data.accessToken;
            sessionStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
            navigate("/"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
          })
          .catch((err) => {
            console.log("소셜로그인 에러", err);
          });
      },
    []
  );
};

export default KakaoRedirect;
