import React, { useState } from "react";
import EmptyItem from "../EmptyItem";
import TitleSidebarDetail from "../TitleSidebarDetail";
import OrderEmpty from "../../../../assets/images/icons/OrderEmpty.svg";

const OrderDetail = () => {
  const [defaultTabIndex, setDefaultTabIndex] = useState(0);
  const orders = [
    { title: "سفارش های باز", message: "شما در حال حاضر سفارش باز ندارید" },
    { title: "سفارش های بسته", message: "شما در حال حاضر سفارش بسته ندارید" },
  ];
  return (
    <>
      <TitleSidebarDetail title="سفارش های من" />
      <div>
        <div className="flex border-b-2 border-neutral-100">
          {orders.map((item, index) => (
            <button
              className={`flex items-center text-sm border-red-600 active:bg-red-200 px-10 py-3 ${
                defaultTabIndex === index ? "border-b-2" : ""
              }`}
              type="button"
              onClick={() => setDefaultTabIndex(index)}
            >
              {item.title}
              <span className="flex justify-center items-center rounded-full text-xs text-white bg-red-400 mr-2 w-5 h-5">
                0
              </span>
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center m-5">
          <EmptyItem
            img={OrderEmpty}
            message={orders[defaultTabIndex].message}
          />
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
