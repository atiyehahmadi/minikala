import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import UserAccountMenuList from "../../../../../../data/jsonFiles/header/useAccountMenuMobile.json";
import UserAccountItem from "../authenticationButton/UserAccountItem";
import { resetLogin } from "../../../../../../redux/authentication/LoginIndex";
import { resetShoppingBasket } from "../../../../../../redux/shoppingInfo/ShoppingInfoIndex";
import { ArrowLeftIcon, XmarkIcon } from "../../../../../shared/UI/Icons";

const UserAccountMenuMobile = ({ setShowUserAccountMenu, click }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const isAuth = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = (title) => {
    setShowUserAccountMenu(false);
    navigate("/profile");
    if (title === "خروج") {
      dispatch(resetShoppingBasket());
      dispatch(resetLogin());
      navigate("/");
    }
  };
  return (
    <div className="fixed top-0 z-30 w-full h-full p-2 bg-white">
      <div className="flex items-end gap-4 p-4">
        <div onClick={() => setShowUserAccountMenu(false)}>
          <XmarkIcon className="cursor-pointer w-7 h-7" />
        </div>
        <p className="text-xl font-bold">پروفایل</p>
      </div>
      {isAuth.user != null && (
        <div
          className="flex items-center justify-between w-full py-2"
          onClick={() => navigate("/profile")}
        >
          <UserAccountItem
            title={userInfo.user.phoneNumber}
            classes="border-none"
          />
          <ArrowLeftIcon className="w-4 h-4 text-neutral-600" />
        </div>
      )}
      {UserAccountMenuList.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full py-1 border-b border-neutral-200 last:border-none"
        >
          <UserAccountItem
            title={item.title}
            icon={item.icon}
            // classes="border-none"
            click={() => clickHandler(item.title)}
          />
          <ArrowLeftIcon className="w-4 h-4 text-neutral-500" />
        </div>
      ))}
    </div>
  );
};

export default UserAccountMenuMobile;
