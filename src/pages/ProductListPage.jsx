import React from "react";
import Banner from "../components/main/banner/Banner";
import ProductList from "../components/productList/ProductList";
import LayoutPage from "./LayoutPage";

const ProductListPage = () => {
  return (
    <>
      <LayoutPage Banner={Banner} ProductList={ProductList} />
    </>
  );
};

export default ProductListPage;
