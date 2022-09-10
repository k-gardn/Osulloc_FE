import React from "react";
import styles from "./Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation, Pagination]);

const Banner = () => {
  const BANNER_IMG_1 =
    "https://www.osulloc.com/upload/kr/ko/adminImage/EZ/IV/20220705112053996OM.png?quality=80";
  const BANNER_IMG_2 =
    "https://www.osulloc.com/upload/kr/ko/adminImage/KV/PJ/20220826104331702OY.png?quality=80";
  const BANNER_IMG_3 =
    "https://www.osulloc.com/upload/kr/ko/adminImage/QS/OH/20220902091418907OS.png?quality=80";
  const BANNER_IMG_4 =
    "https://www.osulloc.com/upload/kr/ko/adminImage/CF/HD/20220825164210367CA.png?quality=80";

  const bannerImgs = [BANNER_IMG_1, BANNER_IMG_2, BANNER_IMG_3, BANNER_IMG_4];

  const width = window.outerWidth;
  console.log("width ?", width);

  return (
    <section className={styles.bannerContainer}>
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
                  가을에 어울리는 <br />
                  티&티푸드 페어링
                </p>
                <p className={styles.bannerDescription}>
                  오설록이 제안하는 티와 티푸드 조홥으로 <br />
                  성큼 다가온 가을을 맞이해보세요.
                </p>
                <p className={styles.bannerDate}>09.02 - 09.18</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
