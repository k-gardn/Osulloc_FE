import React from "react";
import styles from "./CartItem.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";

const CartItem = ({ item, onChangeProps }) => {
    const { productId, name, count, img, price, isChecked } = item;

    console.log("item isChecked > ", isChecked);

    const [checked, setChecked] = useState(isChecked);
    const [isBtnValid, setIsBtnValid] = useState(true);

    const handleChange = (event) => {
        console.log("event.target.checked", event.target.checked);
        setChecked(event.target.checked);
        onChangeProps(productId, "isChecked", event.target.checked);
    };

    const amountInputHandler = (event) => {
        onChangeProps(productId, "count", +event.target.value);
    };

    const amountIncreaseHandler = (event) => {
        event.preventDefault();
        onChangeProps(productId, "count", count + 1);
    };

    const amountDecreaseHandler = (event) => {
        event.preventDefault();
        onChangeProps(productId, "count", count - 1);
    };

    //TODO: - 버튼의 활성화. 아이템 수의 변동이 있을 때를 체크.
    useEffect(() => {
        setIsBtnValid(count > 1);
    }, [count]);

    return (
        <div className={styles.cartItemContainer}>
            <Checkbox
                checked={isChecked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
            />
            <div className={styles.container}>
                <img src={img} alt="productImg" className={styles.img} />
                <div className={styles.info}>
                    <p>{name}</p>
                    <p>포장가능</p>
                    <p>선물 가능한 상품입니다</p>
                </div>
                <div className={styles.cntBox}>
                    <button
                        onClick={amountDecreaseHandler}
                        disabled={!isBtnValid}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        onChange={amountInputHandler}
                        value={count}
                    ></input>
                    <button onClick={amountIncreaseHandler}>+</button>
                    {price * count}
                </div>
                <button>바로구매</button>
            </div>
        </div>
    );
};

export default CartItem;
