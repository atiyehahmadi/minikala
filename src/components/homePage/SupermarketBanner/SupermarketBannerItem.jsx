import React from "react";

const SupermarketBannerItem = ({ img, offPercent }) => {
  return (
    <div className="relative flex items-center justify-center flex-shrink-0">
      <span className="flex items-center justify-center w-16 h-16 p-2 bg-white rounded-full">
        <img
          src={img}
          alt=""
          className="flex items-center justify-center w-10 h-10"
        />
      </span>
      <div>
        <span className="absolute top-12 left-4 rounded-full bg-red-500 text-[10px] text-white font-semibold py-0.5 px-2">
          {offPercent}
        </span>
      </div>
    </div>
  );
};

export default SupermarketBannerItem;
