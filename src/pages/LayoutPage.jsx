import React from "react";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";

// props 값을 뿌려 주는 방식으로 하고 싶음
// const LayoutPage = ({ children }) => {
const LayoutPage = ({
  Banner,
  BestProducts,
  Subscription,
  ProductList,
  EventBanner,
  CartLeeseul,
}) => {
  return (
    <>
      <Header />
      {Banner && <Banner />}
      {BestProducts && <BestProducts />}
      {Subscription && <Subscription />}
      {ProductList && <ProductList />}
      {EventBanner && <EventBanner />}
      {CartLeeseul && <CartLeeseul />}
      <Footer />
    </>
  );
};

export default LayoutPage;
