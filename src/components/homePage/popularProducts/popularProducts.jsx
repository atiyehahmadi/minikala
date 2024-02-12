import React from "react";
import { SparklesIcon } from "../../shared/UI/Icons";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router";

const PopularProducts = () => {
  const { data: productsInfo } = useFetch({
    url: `http://localhost:8000/products?`,
  });
  const navigate = useNavigate();

  return (
    <div className="w-full my-6 bg-white border border-neutral-300 rounded-xl">
      <div className="flex items-end justify-center gap-2 mt-10 mb-6">
        <SparklesIcon className="w-6 h-6 font-bold text-yellow-500" />
        <p className="text-lg font-semibold text-center">پرفروش‌ترین کالاها</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {productsInfo?.slice(8, 16).map((item, index) => (
          <div
            onClick={() => navigate(`/single-product/${item?.id}`)}
            className="flex items-center justify-center p-4 my-6"
          >
            <img src={item?.img} alt="" className="w-20" />
            <p className="ml-4 mr-2 text-xl font-black text-blue-500">
              {index + 1}
            </p>
            <p className="text-xs text-neutral-500 text-ellipsis">
              {item?.title.length > 25
                ? item?.title.slice(0, 25) + "..."
                : item?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
