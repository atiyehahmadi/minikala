import React from "react";
import EmptyCard from "../../assets/images/icons/EmptyCart.svg";

const EmptyBasketPage = () => {
  return (
    <div className="lg:mx-16 px-4">
      <div className="w-full border-b border-neutral-300 my-2">
        <div className="flex lg:w-1/4">
          <div className="flex gap-1 w-full items-center lg:justify-start justify-center font-bold active:border-b-2 active:border-red-500 cursor-pointer py-2">
            <p className="text-neutral-500 text-sm active:text-red-500">
              سبد خرید
            </p>
          </div>
        </div>
      </div>
      <div className="lg:border lg:border-neutral-300 lg:rounded-lg w-full pt-4">
        <div className="flex flex-col gap-4 text-center">
          <img src={EmptyCard} alt="" className="mx-auto" />
          <p className="font-bold ">سبد خرید شما خالی است!</p>
          <p className="text-xs text-neutral-500">
            می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
          </p>
          <div className="flex gap-2 text-[#589fda] font-bold text-sm justify-center pb-10 pt-4">
            <p>تخفیف‌ها و پیشنهادها</p>
            <p>|</p>
            <p>محصولات پرفروش روز</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyBasketPage;
