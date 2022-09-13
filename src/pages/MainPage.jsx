import axios from "axios";
import React, { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/main/banner/Banner";
import BestProducts from "../components/main/bestProducts/BestProducts";
import EventBanner from "../components/main/eventBanner/EventBanner";
import Subscription from "../components/main/subscription/Subscription";
import LayoutPage from "./LayoutPage";

const MainPage = () => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();

  useEffect(() => {
    test();
  }, []);

  const test = useCallback(async () => {
    console.log("시작되고있는가");
    await axios
      .get(`http://3.36.123.198/api/oauth/kakao?code=${code}`)
      .then((res) => {
        // const ACCESS_TOKEN = res.data.accessToken;
        console.log("res.data :>> ", res.data);
        const ACCESS_TOKEN = res.headers["access-token"];
        sessionStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("kakao", true);
        navigate("/"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err.config);
        // throw new Error("에러 발생");
      });
  }, []);

  return (
    <>
      <LayoutPage
        Banner={Banner}
        BestProducts={BestProducts}
        Subscription={Subscription}
        EventBanner={EventBanner}
      />
    </>
  );
};

export default MainPage;
