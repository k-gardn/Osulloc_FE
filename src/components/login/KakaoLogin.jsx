import React from "react";

function KakaoLogin() {
  const REST_API_KEY = "b2aa3fc4f650d5ac019391ae4e6a32cd";
  const REDIRECT_URI = "http://localhost:3000/auth";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  console.log("kakaoLogin 1번 :>> ");

  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <button>누르면 카카오로그인이 되는 버튼</button>
      </a>
    </>
  );
}

export default KakaoLogin;
