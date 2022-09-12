import React from "react";
import styles from "./EventBanner.module.css";

const EventBanner = () => {
  const eventTitle = "제주 티뮤지엄 티스톤";

  const book = () => {
    alert("준비중입니다.");
  };
  return (
    <div className={styles.container}>
      <img
        className={styles.eventImg}
        src="https://www.osulloc.com/kr/ko/static_cdj/images/main/teastone_banner_mo.jpg"
        alt="eventLogo"
      />
      <p className={styles.title}>{eventTitle}</p>
      <button className={styles.btnBook} onClick={book}>
        예약하기 &gt;{" "}
      </button>
    </div>
  );
};

export default EventBanner;
