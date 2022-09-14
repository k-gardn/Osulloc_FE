import React from "react";
import Banner from "../components/main/banner/Banner";
import ProductList from "../components/productList/ProductList";
import LayoutPage from "../components/common/LayoutPage";

const ProductListPage = () => {
  return (
    <LayoutPage>
      <Banner />
      <ProductList />
    </LayoutPage>
  );
};

export default ProductListPage;
