import styles from "./Footer.module.css";

import React from "react";

const Footer = () => {
  const serviceTitle = "고객상담센터 | 주문/배송문의";
  const serviceNumber = "080-805-5555";
  const serviceOpenTime = "평일 09:30 - 17:00 (점심 11:30 - 13:00)";

  const serviceBuyTitle = "특판, 대량구매 문의";
  const serviceBuyEmail = "help@osulloc.com";
  const serviceBuyOpenTime = "평일 09:30 - 17:00 (점심 11:30 - 13:00)";

  const storeMap_icon =
    "https://www.osulloc.com/kr/ko/static_renew/images/f1.png?quality=80";
  const storeMap_title = "매장안내";
  const Membership_icon =
    "https://www.osulloc.com/kr/ko/static_renew/images/f2.png?quality=80";
  const Membership_title = "멤버십혜택";
  const Faq_icon =
    "https://www.osulloc.com/kr/ko/static_renew/images/f3.png?quality=80";
  const Faq_title = "FAQ";
  const private_icon =
    "https://www.osulloc.com/kr/ko/static_renew/images/f4.png?quality=80";
  const private_title = "1:1문의";
  const point_icon =
    "https://www.osulloc.com/kr/ko/static_renew/images/beauti.png";
  const point_title = "뷰티포인트추후적립";

  const companylogo =
    "https://www.osulloc.com/kr/ko/static_renew/images/f_logo.png?quality=80";
  const companyRule =
    "회사소개 | 서비스 | 이용약관 | 개인정보 | 처리방침 | 영상정보 | 처리방침 | 뷰티포인트 | 임직원할인 | 사이트맵 | 전자공고";
  const companyInfo = `㈜ 오설록,
                        대표이사:서혁제 주소:서울특별시 용산구 한강대로 100, 14층(한강로2가) 사업자등록번호: 390-87-01499,
                        통신판매업신고번호:2019-서울용산-1173호 호스팅제공자: ㈜오설록`;

  const companyAlert = `(주)오설록은 오설록 브랜드를 제외한 입점 브랜드에 대해서는 통신판매중개자 이며 통신판매의 당사자가 아닙니다.,
  따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.`;

  return (
    <footer className={styles.container}>
      <div className={styles.infoContainer}>
        <ul className={styles.infoBoxs}>
          <li className={`${styles.infoBox} ${styles.service}`}>
            <div>{serviceTitle}</div>
            <div>{serviceNumber}</div>
            <div>{serviceOpenTime}</div>
          </li>
          <li className={`${styles.infoBox} ${styles.serviceBox}`}>
            <div>{serviceBuyTitle}</div>
            <div>{serviceBuyEmail}</div>
            <div>{serviceBuyOpenTime}</div>
          </li>
          <li className={`${styles.infoBox} ${styles.info}`}>
            <div>
              <img src={storeMap_icon} alt="iconImg" />
              {storeMap_title}
            </div>
            <div>
              <img src={Membership_icon} alt="iconImg" />
              {Membership_title}
            </div>
            <div>
              <img src={Faq_icon} alt="iconImg" />
              {Faq_title}
            </div>
            <div>
              <img src={private_icon} alt="iconImg" />
              {private_title}
            </div>
            <div>
              <img src={point_icon} alt="iconImg" />
              {point_title}
            </div>
          </li>
        </ul>
        <div className={styles.companyContainer}>
          <img
            className={styles.companyLogo}
            src={companylogo}
            alt="companyLogo"
          />
          <ul>
            <li className={styles.companyRule}>{companyRule}</li>
            <li className={styles.company}>{companyInfo.split(",")[0]}</li>
            <li className={styles.company}>{companyInfo.split(",")[1]}</li>
            <li className={styles.company}>{companyInfo.split(",")[2]}</li>
            <div className={styles.companyAlertBox}>
              <li className={styles.companyAlert}>
                {companyAlert.split(",")[0]}
              </li>
              <li className={styles.companyAlert}>
                {companyAlert.split(",")[1]}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
