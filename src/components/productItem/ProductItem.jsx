import React, { useRef } from "react";
import useBrowserEvent from "../../hooks/useBrowerEvent";
import styles from "./Productitem.module.css";

const ProductItem = ({ product }) => {
  const { productId, name, price, img1, img2 } = product;

  const cardRef = useRef();

  const hoverEvent = () => {
    alert("호버");
  };

  const bb = document.querySelector(".ddd");

  console.log("bb :>> ", bb);

  //   bb.addEventListener("hover", hoverEvent);

  //   useBrowserEvent("hover", hoverEvent)

  //   cardRef.current.addEventListener(hoverEvent);

  return (
    <div>
      <div className={styles.card} class="ddd" ref={cardRef}>
        <img className={styles.img} src={img1} alt="productImg" />
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
