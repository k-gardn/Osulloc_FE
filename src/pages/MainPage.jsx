import React from "react";
import Banner from "../components/main/banner/Banner";
import BestProducts from "../components/main/bestProducts/BestProducts";
import EventBanner from "../components/main/eventBanner/EventBanner";
import Subscription from "../components/main/subscription/Subscription";
import LayoutPage from "./LayoutPage";
// import TextField from "@mui/material/TextField";

const MainPage = () => {
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
