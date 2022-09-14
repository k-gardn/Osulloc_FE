import React from "react";
import styles from "./Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation, Pagination]);

const Banner = () => {
  const [BANNER_IMG_PRODUCTS, SetBANNER_IMG_PRODUCTS] = useState("");

  const BANNER_IMG_1 =
    "https://www.osulloc.com/upload/kr/ko/adminImage/EZ/IV/20220705112053996OM.png?quality=80";
  const BANNER_IMG_2 =
    "https://www.osulloc.com/upload/kr/ko/adminImage/KV/PJ/20220826104331702OY.png?quality=80";
  const BANNER_IMG_3 =
    "https://www.osulloc.com/upload/kr/ko/adminImage/IY/VF/20220518024839658QM.png?quality=80";
  const BANNER_IMG_4 =
    "https://www.osulloc.com/upload/kr/ko/adminImage/IK/GL/20220908093758342CK.png?quality=80";

  const bannerImgs = [BANNER_IMG_1, BANNER_IMG_2, BANNER_IMG_3, BANNER_IMG_4];

  const BANNER_TEXT_1 =
    "가을에 어울리는,티&티푸드 페어링,오설록이 제안하는 티와 티푸드 조합으로,성큼 다가온 가을을 맞이해보세요.,09.02 - 09.18";
  const BANNER_TEXT_2 =
    "오설록 선물하기 서비스,잘 활용하는 법,오설록의 간편한 선물하기 서비스로,언제든지 편하고 가볍게 티타임을 선물해보세요,09.08 - 10.08";
  const BANNER_TEXT_3 =
    "다다일상 홈카페,체험권 증정,VIP | VVIP 고객 대상 멤버십 혜택,지금 다다일상 홈카페를 경험해보세요,09.20 - 09.28";
  const BANNER_TEXT_4 =
    "오설록X페이스갤러리,티하우스 한남 오픈,오설록과 페이스갤러리가 제안하는,차와 예술의 감각적인 공간으로 초대합니다,09.01 - 10.30";

  const bannerTexts = [
    BANNER_TEXT_1,
    BANNER_TEXT_2,
    BANNER_TEXT_3,
    BANNER_TEXT_4,
  ];

  return (
    <section id="banner" className={styles.bannerContainer}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {bannerImgs.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.banner}>
              <img className={styles.bannerImg} src={img} alt="banner" />
              <div className={styles.bannerTextBox}>
                <p className={styles.bannerTitle}>
                  {bannerTexts[idx].split(",")[0]} <br />
                  {bannerTexts[idx].split(",")[1]}
                </p>
                <p className={styles.bannerDescription}>
                  {bannerTexts[idx].split(",")[2]} <br />
                  {bannerTexts[idx].split(",")[3]}
                </p>
                <p className={styles.bannerDate}>
                  {bannerTexts[idx].split(",")[4]}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
