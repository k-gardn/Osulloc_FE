import React, { useEffect, useRef } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./Productitem.module.css";
import { useDispatch } from "react-redux";
import {
  productDetail,
  addCart,
  deleteCart,
} from "../../redux/modules/productSlice";
import { useNavigate, useParams } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { productId, name, price, img1, img2 } = product;

  const cardRef = useRef();
  const imgRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = localStorage.getItem("email");

  const goToDetail = () => {
    navigate(`/products/${productId}`);
  };

  useEffect(() => {
    cardRef?.current.addEventListener(
      "mouseover",
      () => (imgRef.current.src = img2)
    );
    return cardRef?.current.removeEventListener("mouseover", () => {});
  });

  useEffect(() => {
    cardRef?.current.addEventListener(
      "mouseout",
      () => (imgRef.current.src = img1)
    );
    return cardRef?.current.removeEventListener("mouseout", () => {});
  });

  const addCartProduct = async () => {
    const result = await dispatch(addCart({ productId })).then(
      (res) => res.payload
    );
    if (result) {
      // TODO: confirm 으로 장바구니로 이동할 껀지 물어 보기
      alert("장바구니에 추가 됐습니다.");
    } else {
      const deletedResult = await dispatch(deleteCart(productId)).then(
        (res) => res.payload
      );
      if (deletedResult) {
        alert("장바구니에서 삭제했습니다.");
      }
    }
  };

  return (
    <div className={styles.card} ref={cardRef}>
      <img
        className={styles.img}
        ref={imgRef}
        src={img1}
        onClick={goToDetail}
        alt="productImg"
        width="200px"
      />
      {loginUser ? (
        <div className={styles.btnCart} onClick={addCartProduct}>
          <AddShoppingCartIcon />
        </div>
      ) : (
        ""
      )}

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
