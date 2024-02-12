import React from "react";
import images from "../../../data/jsonFiles/body/images.json";
import { DotesIcon } from "../../shared/UI/Icons";

const Parts = () => {
  return (
    <div className="grid w-full grid-flow-col grid-rows-2 mx-auto my-4 mt-12 lg:grid-rows-1">
      {images.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="" className="w-12 h-12 mx-auto" />
          <p className="py-2 text-xs text-center">{item.title} </p>
        </div>
      ))}
      <div className="grid ">
        <span className="p-3 m-auto rounded-full bg-neutral-200">
          <DotesIcon className="text-neutral-600 w-7 h-7" />
        </span>
        <p className="py-2 text-xs text-center"> بیشتر </p>
      </div>
    </div>
  );
};

export default Parts;
