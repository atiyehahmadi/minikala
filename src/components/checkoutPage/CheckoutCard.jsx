import React from "react";
import { useDispatch } from "react-redux";
import ModalCounterBox from "../productsPage/Product/ModalCounterBox";
import {
  ShieldCheckIcon,
  ShoppingStoreIcon,
  StoreCheckIcon,
  TruckIcon,
} from "../shared/UI/Icons";
import {
  addToBasket,
  removeFromBasket,
  deleteFromBasket,
} from "../../redux/shoppingInfo/ShoppingInfoIndex";
import SpecialSell from "../../assets/images/tags/SpecialSell.svg";
import IncredibleOffer from "../../assets/images/tags/IncredibleOffer.svg";

const CheckoutCard = ({ dataList }) => {
  const dispatch = useDispatch();
  const productInfo = dataList.productInfo;
  const incrementBtnHandler = () => {
    dispatch(addToBasket({ productInfo: dataList, id: dataList.id }));
  };
  const decrementBtnHandler = () => {
    dispatch(removeFromBasket({ productInfo: dataList, id: dataList.id }));
  };
  const deleteBtnHandler = () => {
    dispatch(deleteFromBasket({ productInfo: dataList, id: dataList.id }));
  };

  return (
    <div className="border-b border-neutral-300 cursor-pointer p-4">
      <div className="flex gap-4">
        <div className="flex flex-col my-4">
          <img
            src={productInfo?.img}
            alt=""
            className="flex w-48 h-40 mx-auto"
          />
          <div className="mx-auto">
            {productInfo?.specialInfo == "فروش ویژه" ? (
              <img src={SpecialSell} alt="" className="py-2 mx-auto" />
            ) : productInfo?.specialInfo == "پیشنهاد شگفت‌انگیز" ? (
              <img src={IncredibleOffer} alt="" className="py-2 mx-auto" />
            ) : (
              <div className="py-4"></div>
            )}
            <ModalCounterBox
              counter={dataList.quantity}
              incrementHandler={incrementBtnHandler}
              decrementHandler={decrementBtnHandler}
              deleteHandler={deleteBtnHandler}
              classes="relative"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-4 text-xs text-neutral-500">
          <p className="text-sm text-black font-bold py-4">
            {productInfo?.title}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <ShieldCheckIcon className="w-5 h-5" />
              <p>گارانتی اصالت و سلامت فیزیکی کالا </p>
            </div>
            {productInfo?.storeName && (
              <div className="flex gap-2">
                <ShoppingStoreIcon className="w-5 h-5" />
                <p>{productInfo?.storeName} </p>
              </div>
            )}
            {productInfo?.storeInfo && (
              <div className="flex gap-2">
                <StoreCheckIcon className="w-5 h-5 text-[#589fda]" />
                <p className="text-xs text-neutral-500">
                  {productInfo?.storeInfo}
                </p>
              </div>
            )}
            {productInfo?.deliveryInfo && (
              <div className="items-center">
                <p className="text-neutral-300 font-bold text-[10px] px-1.5">
                  |
                </p>
                <div className="flex gap-4 items-center px-1">
                  <img
                    src="https://img.icons8.com/fluency/48/66a5da/circled.png"
                    className="w-2 h-2"
                    alt=""
                  />
                  {productInfo?.deliveryInfo === "ارسال سریع سوپرمارکتی" ? (
                    <div className="flex gap-2">
                      <TruckIcon className="w-4 h-4 text-[#3daa16]" />
                      <p className="text-xs text-neutral-500">
                        {productInfo?.deliveryInfo}
                      </p>
                    </div>
                  ) : productInfo?.deliveryInfo === "ارسال فروشنده" ? (
                    <div className="flex gap-2">
                      <img
                        alt=""
                        src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/ffba3a/external-postman-delivery-nawicon-detailed-outline-nawicon.png"
                        className="w-4 h-4"
                      />
                      <p className="text-xs text-neutral-500">
                        {productInfo?.deliveryInfo}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </div>
          {productInfo?.oldPrice && (
            <p className="text-xs text-red-500 pt-5 px-2">
              {productInfo?.oldPrice - productInfo?.price} تومان تخفیف
            </p>
          )}
          <p className="font-bold text-black text-base pt-2 px-2">
            {productInfo?.price} تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
