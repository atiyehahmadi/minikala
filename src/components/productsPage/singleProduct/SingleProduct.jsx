import React from "react";
import MainLayout from "../../shared/layouts/MainLayout";

import { PlusIcon, StarIcon } from "../../shared/UI/Icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  addToBasket,
  deleteFromBasket,
  removeFromBasket,
} from "../../../redux/shoppingInfo/ShoppingInfoAction";
import ModalCounterBox from "../Product/ModalCounterBox";
import useFetch from "../../../hooks/useFetch";

const data = {
  id: 1,
  category: "نان",
  title: "نان تست سبوس سه نان مقدار 530 گرم",
  img: "https://dkstatics-public.digikala.com/digikala-products/0bb03161fdcd6ad49163353f7950ecf2ca0143df_1637760285.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
  rate: "4.2",
  deliveryInfo: "",
  storeInfo: "موجود در انبار مینی‌کالا",
  storeName: "مینی‌کالا",
  specialInfo: "",
  price: "25000",
  oldPrice: "2600",
  starPrice: "500",
  offPercent: "5",
  happy: "89",
};
const SingleProduct = () => {
  const { id } = useParams();

  const { data: productsInfo } = useFetch({
    url: `http://localhost:8000/products?`,
  });

  const product = productsInfo?.find((item) => item.id === parseInt(id));

  const shoppingBasketInfo = useSelector((state) => state.shoppingBasketInfo);
  const shoppingBasketItem = shoppingBasketInfo.shoppingBasket.filter(
    (item) => item.id === product?.id
  )[0];

  const isAuth = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementBtnHandler = () => {
    if (isAuth.user) {
      dispatch(
        addToBasket({ productInfo: product, id: product.id, quantity: 1 })
      );
    } else {
      navigate("/login");
    }
  };

  const decrementBtnHandler = () => {
    dispatch(removeFromBasket({ productInfo: product, id: product.id }));
  };
  const deleteBtnHandler = () => {
    dispatch(deleteFromBasket({ productInfo: product, id: product.id }));
  };

  return (
    <MainLayout>
      <div className="container mx-auto">
        {" "}
        <div
          id="single-product"
          className="grid lg:grid-cols-3 grid-cols-1 gap-6 py-6 container"
        >
          <div className="relative">
            <img
              src={product?.img}
              alt=""
              className="flex xs:w-96 xs:h-96 w-24 h-24 mx-auto m-4"
            />
            <div className="flex flex-col gap-y-2 items-center justify-between absolute right-2 top-2">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/pulsar-line/24/like.png"
                alt="like"
              />
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/pulsar-line/24/share.png"
                alt="share"
              />
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/pulsar-line/24/appointment-reminders.png"
                alt="appointment-reminders"
              />
            </div>
          </div>
          <div className="flex flex-col px-4 w-full">
            <div className="flex items-center justify-between">
              <p className="md:text-base text-sm text-neutral-900 font-black pb-3">
                {product?.title}
              </p>
              <div className="flex gap-1">
                <p className="text-xs text-neutral-600">{product?.rate}</p>
                <StarIcon className="w-4 h-4" />
              </div>
            </div>

            <div className="flex text-xs">
              {product?.happy}% (۱۸۰ نفر) از خریداران، این کالا را پیشنهاد
              کرده‌اند
            </div>
          </div>

          <div className="bg-neutral-100 rounded-lg p-4">
            <div className="flex flex-col justify-between items-start gap-y-4 divide-y-2">
              <p className="text-base font-black ">فروشنده</p>
              <div className="flex items-center w-full pt-4 justify-start">
                <img
                  className="ml-3"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/pulsar-line/20/shop.png"
                  alt="shop"
                />
                <p className="text-sm">{product?.storeName} </p>
              </div>
              <div className="flex items-center w-full pt-4 justify-start">
                <img
                  className="ml-3"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/pulsar-line/20/security-checked.png"
                  alt="security-checked"
                />
                <p className="text-sm"> گارانتی اصالت و سلامت فیزیکی کالا</p>
              </div>
              <div className="flex items-start justify-between w-full pt-4">
                <p className="text-base font-bold w-full">قیمت</p>
                <div className="items-end text-left flex flex-col gap-y-2">
                  {product?.offPercent ? (
                    <div className="flex items-center justify-end gap-2">
                      <span className="bg-red-500 text-white rounded-full text-[10px] px-2 py-1 ">
                        {product?.offPercent}%
                      </span>
                      <p className="text-xs line-through text-neutral-400 ">
                        {product?.oldPrice}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <p className="text-base font-semibold text-neutral-900 mt-2 text-left ">
              {product?.price} تومان
            </p>
            <div className="flex items-center justify-between mt-5 gap-x-4">
              <div
                className="flex items-center justify-center flex-grow gap-x-4  
            "
                onClick={incrementBtnHandler}
              >
                <span className=" bg-red-500 text-white w-full flex items-center justify-center py-4 rounded-xl text-xs font-semibold p-1">
                  <PlusIcon className="bottom-0 w-4 h-4 text-red-500" />
                  افزودن به سبد خرید
                </span>
              </div>
              {shoppingBasketItem && (
                <div className="flex">
                  <ModalCounterBox
                    counter={shoppingBasketItem.quantity}
                    incrementHandler={incrementBtnHandler}
                    decrementHandler={decrementBtnHandler}
                    deleteHandler={deleteBtnHandler}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleProduct;
