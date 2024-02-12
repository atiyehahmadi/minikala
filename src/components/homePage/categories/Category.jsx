import React from "react";
import categoryList from "../../../data/jsonFiles/header/category.json";
import { useNavigate } from "react-router";

const Category = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="my-5 text-xl font-extrabold text-center">
        دسته‌بندی‌های مینی‌کالا
      </p>
      <div className="grid w-full grid-cols-3 gap-6 px-6 my-4 lg:grid-cols-6">
        {categoryList.map((item, index) => (
          <div
            key={item}
            onClick={() => navigate(`/product`)}
            className="flex flex-col items-center justify-start w-full "
          >
            <img
              src={item.img}
              alt={item.img}
              className="lg:w-36 w-28 cursor-pointer"
            />
            <p className="text-[10px] lg:text-xs text-center font-semibold p-2 cursor-pointer">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
