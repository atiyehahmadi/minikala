import React from "react";
import SupermarketBasket from "../../../assets/images/supermarketBanner/1.png";
import SupermarketText from "../../../assets/images/supermarketBanner/2.svg";
import OfferSupermarketList from "../../../data/jsonFiles/body/supermarketBannerList.json";
import OfferSupermarketItem from "./SupermarketBannerItem";
import useDeviceType from "../../../hooks/useDeviceType";
import { ArrowLeft } from "../../shared/UI/Icons";
import { useNavigate } from "react-router";

const SupermarketBanner = () => {
  const { isMobile } = useDeviceType();
  let offerSupermarketList = OfferSupermarketList;
  if (isMobile) {
    offerSupermarketList = OfferSupermarketList.slice(0, 3);
  }
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product`)}
      className="w-full px-8 py-6 my-6 cursor-pointer bg-neutral-100 lg:flex rounded-xl"
    >
      <div className="flex w-1/2 gap-4">
        <div className="flex gap-2">
          <img
            src={SupermarketBasket}
            alt="SupermarketBasket"
            className="w-full"
          />
          <img
            src={SupermarketText}
            alt="SupermarketText"
            className="lg:w-72 w-42"
          />
        </div>
        <div className="my-auto">
          <span className="invisible px-2 py-1 text-sm text-white bg-red-500 rounded-full xl:visible">
            تا 57% تخفیف
          </span>
        </div>
      </div>
      <div className="flex lg:w-1/2">
        <div className="flex w-2/3 gap-2 py-2 mr-auto overflow-hidden">
          {offerSupermarketList.map((item, index) => (
            <OfferSupermarketItem
              key={index}
              offPercent={item.offPercent}
              img={item.img}
            />
          ))}
        </div>
        <div className="flex my-auto mr-auto">
          <span className="flex items-center flex-shrink-0 gap-2 p-2 text-sm font-semibold text-green-600 bg-white rounded-full lg:p-4">
            <p className="text-[0] lg:text-xs">بیش از 100 کالا</p>
            <ArrowLeft className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SupermarketBanner;
