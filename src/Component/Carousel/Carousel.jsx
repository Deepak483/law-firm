import { useRef } from "react";
import styles from "./Carousel.module.css";
import { testimonals } from "../../data";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../assests/images/arrow-left.png";
import rightArrow from "../../assests/images/arrow-right.png";
import "swiper/css";

const Carousel = () => {
  const swiperRef = useRef();
  const cards = testimonals.map((item) => {
    return (
      <SwiperSlide>
        <div className={styles.card}>
          <img
            src={item.img}
            alt="person pics"
            className={styles.clientImage}
          />
          <h4>{item.name}</h4>
          <h5>{item.sub}</h5>
          <p>{item.review}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className={styles.testimonContainer}>
      <div className={styles.subContainer}>
        <div className={styles.testHeading}>
          <h1>
            What says our <br></br>happy Clients?
          </h1>
          <div className={styles.swiperButtons}>
            <img
              src={leftArrow}
              className={styles.arrow}
              alt="left-swipe"
              onClick={() => swiperRef.current.slidePrev()}
            />
            <img
              src={rightArrow}
              className={styles.arrow}
              alt="right-swipe"
              onClick={() => swiperRef.current.slideNext()}
            />
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
          spaceBetween={14}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation, Pagination]}
          breakpoints={{
            639: {
              slidesPerView: 3,
            },
          }}
        >
          {cards}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
