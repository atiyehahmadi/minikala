import React from "react";
import { useNavigate } from "react-router";

const OfferBoxItem = ({ id, image, newPrice, oldPrice, off }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/single-product/${id}`)}
      className="w-full flex flex-col items-center bg-white my-2 px-3 py-4 rounded-sm"
    >
      <img src={image} alt={image} className="w-36 h-36 cursor-pointer" />
      <div className="w-full flex justify-between items-center text-xs px-1">
        <span className="text-white text-[11px] bg-red-500 p-1 w-6 h-6 flex items-center justify-center rounded-full">
          {off + "%"}
        </span>
        <p className="flex flex-shrink-0 text-[11px] lg:text-[12px]">
          {newPrice} تومان
        </p>
      </div>
      <p className="self-end text-[11px] text-neutral-400 line-through text-left px-1">
        {oldPrice}
      </p>
    </div>
  );
};

export default OfferBoxItem;
