import React from "react";
import Banner from "../components/main/banner/Banner";
import BestProducts from "../components/main/bestProducts/BestProducts";
import EventBanner from "../components/main/eventBanner/EventBanner";
import Subscription from "../components/main/subscription/Subscription";
import LayoutPage from "./LayoutPage";

const MainPage = () => {
  const num = 20000;
  // console.log("num type > ", typeof num);
  if (!isNaN(num)) {
    const cn1 = `${num.toLocaleString("ko-KR")}원`;
    console.log("cnt >", cn1);
  } else {
    console.log(`${num} 은 숫자가 아닙니다.`);
  }
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
