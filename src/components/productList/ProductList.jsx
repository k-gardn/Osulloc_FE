import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/modules/productSlice";
import ProductItem from "../productItem/ProductItem";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const Products = useSelector((store) => store.product.Products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.containerText}>
        <span className={styles.btnAllProduct}>전체 제품</span>
        <span className={styles.btnBestProduct}>베스트</span>
        <div className={styles.line}></div>
      </div>
      <div className={styles.products}>
        <div className={styles.product}>
          {Products.map((product) => {
            return <ProductItem product={product} key={product.productId} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
