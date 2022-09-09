import React from "react";
import Banner from "../components/main/banner/Banner";
import BestProducts from "../components/main/bestProducts/BestProducts";
import Subscription from "../components/main/subscription/Subscription";
import LayoutPage from "./LayoutPage";

const MainPage = () => {
  return (
    <>
      <LayoutPage
        Banner={Banner}
        BestProducts={BestProducts}
        Subscription={Subscription}
      />
    </>
  );
};

export default MainPage;
