import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Banner from "../components/main/banner/Banner";
import BestProducts from "../components/main/bestProducts/BestProducts";
import EventBanner from "../components/main/eventBanner/EventBanner";
import Subscription from "../components/main/subscription/Subscription";
import LayoutPage from "./LayoutPage";
import { main } from "../redux/modules/productSlice";
import { useEffect } from "react";

const MainPage = () => {
  const code = window.location.href.split("=")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(main(code));
  }, [code]);

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
