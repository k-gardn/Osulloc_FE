import React, { useEffect, useRef, useState } from "react";
import styles from "./Productitem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../../redux/modules/productSlice";
import { useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { getcart } from "../../redux/modules/cartSlice";
import { moneyForm } from "../../utils/moneyForm";

const ProductItem = ({ product }) => {
  const { productId, name, price, img1, img2 } = product;

  const cart = useSelector((state) => state.cart.cart);

  const [cartList, setCartList] = useState(cart);
  const [selected, setSelected] = useState(false);

  const cardRef = useRef();
  const imgRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = localStorage.getItem("email");

  useEffect(() => {
    dispatch(getcart());
  }, [dispatch]);

  useEffect(() => {
    setCartList(cart);
  }, [cart]);

  useEffect(() => {
    const check = cartList.find((item) => item.productId === productId);
    if (check) {
      setSelected(true);
    }
  }, [cartList]);

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
      alert("장바구니에 추가 됐습니다.");
      setSelected(true);
    } else {
      const deletedResult = await dispatch(deleteCart(productId)).then(
        (res) => res.payload
      );
      if (deletedResult) {
        alert("장바구니에서 삭제했습니다.");
        setSelected(false);
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
      />
      {loginUser ? (
        <div className={styles.btnCart} onClick={addCartProduct}>
          {selected ? <RemoveIcon /> : <AddIcon />}
        </div>
      ) : (
        ""
      )}

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}> {moneyForm(price)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
