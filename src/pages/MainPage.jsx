import React from "react";
import Banner from "../components/main/banner/Banner";
import BestProducts from "../components/main/bestProducts/BestProducts";
import EventBanner from "../components/main/eventBanner/EventBanner";
import Subscription from "../components/main/subscription/Subscription";
import LayoutPage from "../components/common/LayoutPage";

const MainPage = () => {
  return (
    <LayoutPage>
      <Banner />
      <BestProducts />
      <Subscription />
      <EventBanner />
    </LayoutPage>
  );
};

export default MainPage;
