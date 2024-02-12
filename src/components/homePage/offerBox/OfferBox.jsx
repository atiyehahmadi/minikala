import React from "react";
import { SwiperSlide } from "swiper/react";
import useFetch from "../../../hooks/useFetch";
import OfferBoxItem from "./OfferBoxItem";
import offBox from "../../../assets/images/photos/box.png";
import Carousel from "../../shared/UI/Carousel/Carousel";
import { ArrowLeft, ArrowLeftIcon } from "../../shared/UI/Icons";
import AmazingOffer from "../../../../src/assets/images/tags/AmazingOffer.svg";

const OfferBox = () => {
  const { data: productsInfo } = useFetch({
    url: `http://localhost:8000/products?`,
  });
  return (
    <div className="flex items-center justify-center w-full gap-2 my-4 bg-red-500 lg:rounded-xl ">
      <div className="w-auto lg:w-[145px] flex flex-col items-center flex-shrink-0 text-white py-5">
        <img
          src={AmazingOffer}
          alt="amazing-typo"
          className="w-16 h-16 mx-auto"
        />
        <img src={offBox} alt="" className="w-24 h-24 mx-auto" />
        <div className="flex items-center justify-center py-4 text-xs gap-x-1">
          <p className="flex flex-shrink-0">مشاهده همه</p>
          <ArrowLeftIcon className="flex flex-shrink-0 w-3 h-3" />
        </div>
      </div>
      <div className="items-center justify-center flex-grow overflow-x-hidden">
        <Carousel slidPerView={6} autoplay={{}}>
          {productsInfo?.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              <OfferBoxItem
                image={item?.img}
                newPrice={item?.price}
                oldPrice={item?.oldPrice}
                off={item?.offPercent}
                id={item?.id}
                {...productsInfo}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full px-1 min-h-[14rem] ">
              <div className="flex gap-y-2">
                <span className="p-2 bg-white rounded-full">
                  <ArrowLeft className="w-3 h-3 text-neutral-700" />
                </span>
              </div>
              <p className="text-white">مشاهده بیشتر</p>
            </div>
          </SwiperSlide>
        </Carousel>
      </div>
    </div>
  );
};

export default OfferBox;
