import React from "react";
import styles from "./SubscriptionItem.module.css";

const SubscriptionItem = ({ info }) => {
  const {
    title,
    img,
    price,
    infoDetail,
    sendItem,
    delieveryFee,
    delieveryDate,
  } = info;
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <img src={img} alt="subscribeImg" className={styles.image} />
        <div className={styles.mainText}>
          <p className={styles.mainTextTitle}>{title}</p>
          <div className={styles.mainTextBox}>
            {delieveryDate}
            <span className={styles.mainTextPrice}>{price}</span>
            <div className={styles.mainTextEvent}>{delieveryFee}</div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.hoverText}>
          <p className={styles.mainTextTitle}>{title}</p>
          <div className={styles.mainTextBox}>
            {delieveryDate}
            <span className={styles.mainTextPrice}>{price}</span>
            <div className={styles.mainTextEvent}>{delieveryFee}</div>
          </div>
          <div className={styles.line}></div>
          <p className={styles.detail}>{infoDetail}</p>
          <p className={styles.sendItem}>︲ {sendItem.split(",")[0]}</p>
          <p className={styles.sendItem}>︲ {sendItem.split(",")[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionItem;
