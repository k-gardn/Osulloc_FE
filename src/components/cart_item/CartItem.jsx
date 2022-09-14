import React from "react";
import styles from "./CartItem.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import {
  cartCountChange,
  deletecartproduct,
} from "../../redux/modules/cartSlice";

const CartItem = ({ item, onChangeProps }) => {
  const dispatch = useDispatch();
  const { productId, name, count, img1, price, isChecked, pack } = item;
  //   console.log("item isChecked > ", isChecked);

  const [checked, setChecked] = useState(isChecked);
  const [isBtnValid, setIsBtnValid] = useState(false);
  const [wrapping, setWrapping] = useState("");

  useEffect(() => {
    if (pack === false) {
      return setWrapping("포장 안함");
    } else {
      return setWrapping("포장 함");
    }
  }, [cartCountChange]);

  const handleChange = (event) => {
    console.log("event.target.checked", event.target.checked);
    setChecked(event.target.checked);
    onChangeProps(productId, "isChecked", event.target.checked);
  };

  // const amountInputHandler = (event) => {
  //   onChangeProps(productId, "count", +event.target.value);
  //   const writeCount = {
  //     productId,
  //     count,
  //   };
  //   dispatch(cartCountChange(writeCount));
  // };

  const amountIncreaseHandler = (event) => {
    event.preventDefault();
    onChangeProps(productId, "count", count + 1);
    // const plusCount = {
    //   productId,
    //   count: count + 1,
    // };
    dispatch(cartCountChange({ ...item, count: count + 1 }));
  };

  const amountDecreaseHandler = (event) => {
    event.preventDefault();
    onChangeProps(productId, "count", count - 1);
    // const plusCount = {
    //   productId,
    //   count: count - 1,
    // };
    dispatch(cartCountChange({ ...item, count: count - 1 }));
    // dispatch(cartCountChange("gggggg"));
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    alert("삭제하시겠습니까?");
    dispatch(deletecartproduct(productId));
  };

  //TODO: - 버튼의 활성화. 아이템 수의 변동이 있을 때를 체크.
  useEffect(() => {
    setIsBtnValid(count > 1);
  }, [count]);

  const order = () => {
    alert("주문하시겠습니까?");
  };

  return (
    <div className={styles.cartItemContainer}>
      {/* <Checkbox
        checked={isChecked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      /> */}

      {/* <div className={styles.container}> */}
      {/* <div className={styles.imgAndcontent}> */}
      <img src={img1} alt="productImg" className={styles.img} />
      {/* <div className={styles.contentBox}> */}
      <div className={styles.info}>
        <p>{name}</p>
        <p>{wrapping}</p>
        <p className={styles.gift}>선물 가능한 상품 입니다.</p>
      </div>
      {/* </div> */}

      {/* <div className={styles.cntBox}> */}
      <div className={styles.countbtnBox}>
        <button onClick={amountDecreaseHandler} disabled={!isBtnValid}>
          -
        </button>
        <span>{count}</span>
        {/* <input
                type="text"
                onChange={amountInputHandler}
                value={count}
              ></input> */}
        <button onClick={amountIncreaseHandler}>+</button>
      </div>
      <span>{price * count}</span>
      {/* </div> */}
      {/* </div> */}
      <div className={styles.btnSet}>
        <button className={styles.buybtn} onClick={order}>
          바로구매
        </button>
        <button className={styles.deletebtn} onClick={deleteHandler}>
          삭제하기
        </button>
      </div>

      {/* </div> */}
    </div>
  );
};

export default CartItem;
