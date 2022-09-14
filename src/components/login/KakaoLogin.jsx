import React from "react";

function KakaoLogin() {
  const REACT_APP_REST_API_KEY = `b2aa3fc4f650d5ac019391ae4e6a32cd`;
  const REACT_APP_REDIRECT_URI = `https://osulloc.vercel.app/auth`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_REST_API_KEY}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=code`;

  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <img src={"/kakaologin.png"} alt="kakaologin" width="40px" height="40px"></img>
      </a>
      <p
        style={{
          fontSize: "0.75rem",
          letterSpacing: "-0.8px",
          color: "#272727",
          marginTop: "2px",
        }}
      >
        카카오 로그인
      </p>
    </>
  );
}

export default KakaoLogin;
