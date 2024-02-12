import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const Carousel = ({
  slidPerView,
  children,
  autoplay = false,
  loop = false,
}) => {
  const nextRef = useRef();
  const prevRef = useRef();
  return (
    <Swiper
      modules={[Navigation]}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      breakpoints={{
        1280: {
          slidesPerView: slidPerView,
        },
        1024: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 3,
        },
        375: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
      spaceBetween={4}
      speed={1000}
      effect
      loop={loop}
      autoplay={autoplay}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
