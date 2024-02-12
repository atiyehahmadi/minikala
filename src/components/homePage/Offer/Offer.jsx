import React from "react";
import { useNavigate } from "react-router";
import OfferList from "../../../data/jsonFiles/body/offers.json";

const Offer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mb-4">
      <p className="my-6 text-xl font-bold text-center">پیشنهاد مینی‌کالا</p>
      <div className="bg-white ">
        <div className="grid grid-cols-6 ">
          {OfferList.map((item, index) => (
            <div
              className="border cursor-pointer border-neutral-100"
              onClick={() => navigate(`/product`)}
            >
              <div className="flex justify-center py-4">
                <span className="p-4 pb-4 bg-white border rounded-full border-neutral-300">
                  <img src={item.img} alt="" className="w-14 h-14" />
                </span>
              </div>
              <p className="pb-4 text-sm font-bold text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
