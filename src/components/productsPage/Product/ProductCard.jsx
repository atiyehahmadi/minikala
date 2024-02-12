import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  MegaphoneIcon,
  PlusIcon,
  SparklesIcon,
  StarIcon,
  StoreCheckIcon,
  TruckIcon,
} from "../../shared/UI/Icons";
import {
  addToBasket,
  removeFromBasket,
  deleteFromBasket,
} from "../../../redux/shoppingInfo/ShoppingInfoIndex";
import SpecialSell from "../../../assets/images/tags/SpecialSell.svg";
import IncredibleOffer from "../../../assets/images/tags/IncredibleOffer.svg";
import ModalCounterBox from "./ModalCounterBox";

const ProductCard = ({ dataList, classes }) => {
  const isAuth = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingBasketInfo = useSelector((state) => state.shoppingBasketInfo);
  const shoppingBasketItem = shoppingBasketInfo.shoppingBasket.filter(
    (item) => item.id === dataList.id
  )[0];
  const incrementBtnHandler = () => {
    if (isAuth.user) {
      dispatch(
        addToBasket({ productInfo: dataList, id: dataList.id, quantity: 1 })
      );
    } else {
      navigate("/login");
    }
  };
  const decrementBtnHandler = () => {
    dispatch(removeFromBasket({ productInfo: dataList, id: dataList.id }));
  };
  const deleteBtnHandler = () => {
    dispatch(deleteFromBasket({ productInfo: dataList, id: dataList.id }));
  };

  return (
    <div
      className={`border border-neutral-200 bg-white cursor-pointer sm:p-4 px-2 py-4 ${classes}`}
    >
      <div className="flex items-center justify-between">
        {dataList.specialInfo === "فروش ویژه" ? (
          <img src={SpecialSell} alt="" className="py-2" />
        ) : dataList.specialInfo === "پیشنهاد شگفت‌انگیز" ? (
          <img src={IncredibleOffer} alt="" className="py-2" />
        ) : (
          <div className="py-4"></div>
        )}
        {dataList.Advertisement && (
          <div className="flex gap-1">
            <p className="text-xs text-neutral-500">Ad</p>
            <MegaphoneIcon className="w-4 h-4 text-red-500" />
          </div>
        )}
      </div>
      <div className="flex flex-row sm:flex-col sm:gap-3">
        <div
          className="relative shrink-0"
          onClick={() => navigate(`/single-product/${dataList.id}`)}
        >
          <Suspense
            fallback={
              <div className="w-20 h-20 bg-red-300 sm:w-48 sm:h-48">
                {" "}
                loading
              </div>
            }
          >
            <img
              src={dataList.img}
              alt=""
              className="flex w-24 h-24 m-4 mx-auto xs:w-48 xs:h-48"
            />
          </Suspense>
          <div className="h-8">
            {shoppingBasketItem ? (
              <div className="flex">
                <ModalCounterBox
                  counter={shoppingBasketItem.quantity}
                  incrementHandler={incrementBtnHandler}
                  decrementHandler={decrementBtnHandler}
                  deleteHandler={deleteBtnHandler}
                />
              </div>
            ) : (
              <div className="flex mx-5" onClick={incrementBtnHandler}>
                <span className="p-1 text-xs font-semibold text-red-500 border-2 border-red-500 rounded-full">
                  <PlusIcon className="bottom-0 w-4 h-4 text-red-500" />
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full px-4">
          <p className="py-4 text-sm text-neutral-700">{dataList.title}</p>
          <div className="flex items-center justify-between py-4">
            {dataList.deliveryInfo ? (
              <div className="flex items-center gap-1">
                <TruckIcon className="w-5 h-5 text-[#3daa16]" />
                <p className="text-xs text-neutral-500">
                  {dataList.deliveryInfo}
                </p>
              </div>
            ) : (
              <div className="flex gap-1">
                <StoreCheckIcon className="w-4 h-4 text-[#589fda]" />
                <p className="text-xs text-neutral-500">{dataList.storeInfo}</p>
              </div>
            )}
            <div className="flex gap-1">
              <p className="text-xs text-neutral-600">{dataList.rate}</p>
              <StarIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            {dataList.offPercent ? (
              <span className="bg-red-500 text-white rounded-full text-[10px] px-2 py-1 ">
                {dataList.offPercent}%
              </span>
            ) : null}
            <p className="mr-auto text-xs font-semibold text-neutral-700">
              {dataList.price} تومان
            </p>
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="flex items-center gap-1 text-[#ad349d] font-semibold w-full">
              <SparklesIcon className="w-3 h-3" />
              <p className="text-xs ">{dataList.starPrice} تومان</p>
            </div>
            <p className="w-full text-xs text-left line-through text-neutral-400">
              {dataList.oldPrice} تومان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
