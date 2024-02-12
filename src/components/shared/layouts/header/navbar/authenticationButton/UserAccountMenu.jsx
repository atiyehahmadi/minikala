import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import UserAccountItem from "./UserAccountItem";
import { resetLogin } from "../../../../../../redux/authentication/LoginIndex";
import { resetShoppingBasket } from "../../../../../../redux/shoppingInfo/ShoppingInfoIndex";
import UserAccountMenuList from "../../../../../../data/jsonFiles/body/userAccountMenu.json";

const UserAccountMenu = ({ setShowUserAccountMenu }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const isAuth = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = (title) => {
    setShowUserAccountMenu(false);
    navigate("/profile/account");
    if (title == "خروج از حساب کاربری") {
      dispatch(resetShoppingBasket());
      dispatch(resetLogin());
      navigate("/");
    }
  };
  return (
    <div className="absolute left-0 z-20 p-2 bg-white border rounded-lg shadow-md border-neutral-100">
      {isAuth.user != null && (
        <UserAccountItem
          title={userInfo.user.phoneNumber}
          click={() => navigate("/profile/account")}
        />
      )}
      {UserAccountMenuList.map((item, index) => (
        <UserAccountItem
          key={index}
          title={item.title}
          click={() => clickHandler(item.title)}
        />
      ))}
    </div>
  );
};

export default UserAccountMenu;
