import styles from "./Subscription.module.css";
import SubscriptionItem from "../subscriptionItem/SubscriptionItem";

import React from "react";

const Subscription = () => {
  const SUBSCRIPTION_ITEM_1 = {
    title: "눈으로 즐기는 차, 이메일 구독 서비스",
    img: "https://www.osulloc.com/kr/ko/static_cdj/images/main/dada_img03_pc_1.jpg",
    price: "0원",
    infoDetail:
      "티에 관한 재미있는 이야기를 이메일로 받아보세요. 다양한 이벤트 정보도 보내 드려요.",
    sendItem: "차의 종류와 역사,티 소믈리에 추천 차",
    delieveryFee: "",
    delieveryDate: "매월",
  };
  const SUBSCRIPTION_ITEM_2 = {
    title: "새롭게 만나는 차, 다다일상 베이직",
    img: "https://www.osulloc.com/upload/kr/ko/adminImage/WJ/DL/20220825135751301BP.jpg?quality=80",
    price: "16,000원",
    infoDetail:
      "오설록 티 소믈리에가 매월 그달의 테마와 어울리는 차들을 선정하여 보내드립니다.",
    sendItem: "3종류 이상의 다양한 티백 구성,2만원 이상 정가 구성",
    delieveryFee: "배송비 Free",
    delieveryDate: "2주 마다",
  };
  const SUBSCRIPTION_ITEM_3 = {
    title: "다르게 만나는 차, 다다일상 홈카페",
    img: "https://www.osulloc.com/kr/ko/static_cdj/images/main/dada_img01_pc_1.jpg",
    price: "25,000원",
    infoDetail:
      "매월 오설록이 티를 이용한 새로운 레시피를 소개해드립니다. 다양한 레시피를 따라하면서 차를 색다르게 경험해보세요.",
    sendItem: "3종류 이상의 다양한 티백/티푸드 구성,3만 5천원 이상 정가 구성",
    delieveryFee: "배송비 Free",
    delieveryDate: "매주",
  };

  const btnAllInfo = () => {
    alert("준비중입니다.");
  };

  return (
    <section className={styles.container}>
      <div className={styles.subscribeContainer}>
        <p className={styles.title}>다다일상 구독</p>
        <p className={styles.subTitle}>
          하루 한 번, 나를 만나는 시간을 가져보세요.
        </p>
        <div className={styles.box}>
          <SubscriptionItem info={SUBSCRIPTION_ITEM_1} />
          <SubscriptionItem info={SUBSCRIPTION_ITEM_2} />
          <SubscriptionItem info={SUBSCRIPTION_ITEM_3} />
        </div>
        <button className={styles.btnAllInfo} onClick={btnAllInfo}>
          다다일상 자세히 보기 &gt;
        </button>
      </div>
    </section>
  );
};

export default Subscription;
