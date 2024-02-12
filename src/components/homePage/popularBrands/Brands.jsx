import React from "react";
import { SwiperSlide } from "swiper/react";
import { SparklesIcon } from "../../shared/UI/Icons";
import BrandsList from "../../../data/jsonFiles/body/brands.json";
import Carousel from "../../shared/UI/Carousel/Carousel";

const Brands = () => {
  return (
    <div className="w-full my-6 bg-white border border-neutral-300 rounded-xl">
      <div className="flex items-end justify-center gap-2 mt-10 mb-6">
        <SparklesIcon className="w-6 h-6 font-bold text-yellow-500" />
        <p className="text-lg font-semibold text-center">محبوب‌ترین برندها</p>
      </div>
      <Carousel
        slidPerView={8}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
      >
        {BrandsList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center pr-4 my-6 h-28 w-28">
              <img src={item} alt="" className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default Brands;
