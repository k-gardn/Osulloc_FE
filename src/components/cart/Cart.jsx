import React, { useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "../cart_item/CartItem";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { deletecartproduct, getcart } from "../../redux/modules/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCheckboxisChecked, setTotalCheckboxisChecked] = useState(true);

  const cartState = useSelector((state) => state.cart);
  const cart = cartState?.cart;

  const [cartList, setCartList] = useState(cart);

  useEffect(() => {
    dispatch(getcart());
  }, [dispatch]);

  console.log("cartList", cart);

  //TODO:
  useEffect(() => {
    const getTotalPrice = cartList.reduce((acc, obj) => {
      return (acc += obj.isChecked ? obj.count * obj.price : 0);
    }, 0);
    setTotalPrice(getTotalPrice);
  }, [cartList]);

  const onChangeProps = (id, key, value) => {
    setCartList((prevState) => {
      return prevState.map((obj) => {
        if (obj.productId === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  const totalCheckboxHandler = (value) => {
    setCartList((prevState) => {
      return prevState.map((obj) => {
        return { ...obj, isChecked: value };
      });
    });
    console.log("carList > ", cartList);
    setTotalCheckboxisChecked(value);
  };

  const handleChange = (event) => {
    setTotalCheckboxisChecked(event.target.checked);
    totalCheckboxHandler(event.target.checked);
  };
  //TODO: isChecked 키의 값이 false인 아이템만 남기고 목록에서 삭제.
  const deleteItems = () => {
    setCartList((prevState) => {
      return prevState.filter((obj) => {
        return !obj.isChecked;
      });
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <p>장바구니</p>
        <Checkbox
          className={styles.checkbox}
          checked={totalCheckboxisChecked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />

        {/* TODO: 카트 item 나열. */}
        <button className={styles.deleteBtn} onClick={deleteItems}>
          선택삭제
        </button>
        <div className={styles.cartContainer}>
          <div style={{ height: 400, width: "100%" }}>
            {cartList.map((item) => (
              <CartItem
                item={item}
                key={item.productId}
                onChangeProps={onChangeProps}
              />
            ))}
          </div>
          <div className={styles.cartPriceBox}>
            <ul>
              <div className={styles.cartPriceText}>
                <li>상품금액</li>
                <li>{totalPrice} 원</li>
              </div>
              <div className={styles.cartPriceText}>
                <li>상품 할인</li>
                <li>0원</li>
              </div>
              <div className={styles.cartPriceText}>
                <li>포장비</li>
                <li>원</li>
              </div>
              <div className={styles.cartPriceText}>
                <li>부가 쇼핑액</li>
                <li>0원</li>
              </div>
              <div className={styles.cartPriceText}>
                <li>배송비</li>
                <li>원</li>
              </div>
            </ul>
            <div> 결제 예상 금액</div>
            <div> 원</div>
            <button>{totalPrice} 원 주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
