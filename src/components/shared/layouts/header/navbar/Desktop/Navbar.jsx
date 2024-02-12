import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Logo } from "../../../../UI/Logo";
import { ShoppingBasketIcon } from "../../../../UI/Icons";
import CloseWithOnClickScreen from "../../../../logic/CloseWithOnClickScreen";
import InputSearch from "../searchBox/InputSearch";
import SearchDropDown from "../searchBox/SearchDropDown";
import EntranceBtn from "../authenticationButton/EntranceBtn";
import AuthBtn from "../authenticationButton/AuthBtn";
import UserAccountMenu from "../authenticationButton/UserAccountMenu";

const Navbar = () => {
  const [showUserAccountMenu, setShowUserAccountMenu] = useState(false);
  const isAuth = useSelector((state) => state.userInfo);
  const totalBasketItem = useSelector((state) => state.shoppingBasketInfo);
  const toggleDropDown = useSelector((state) => state.toggleDropDown);
  const navigate = useNavigate();
  const userAccountMenuRef = useRef();
  return (
    <div className="flex justify-between bg-white border-b border-b-neutral-300 sticky top-0 z-50 p-3">
      <div className="flex gap-4 w-3/5">
        <Logo />
        <div className="flex relative w-full">
          <InputSearch />
          {toggleDropDown.dropDownState && <SearchDropDown />}
        </div>
      </div>
      <div className="flex gap-4 items-center text-xs font-semibold px-2">
        <div className="relative">
          {isAuth.user != null ? (
            <AuthBtn openUserAccountMenu={() => setShowUserAccountMenu(true)} />
          ) : (
            <EntranceBtn
              className="bg-white border rounded-lg py-2 px-4"
              text={"ورود / ثبت نام"}
              click={() => navigate("/login")}
            />
          )}
          <div ref={userAccountMenuRef}>
            {showUserAccountMenu && (
              <UserAccountMenu
                setShowUserAccountMenu={setShowUserAccountMenu}
              />
            )}
          </div>
        </div>
        <span className="text-2xl text-neutral-300 font-thin">|</span>
        <div className="cursor-pointer" onClick={() => navigate("/checkout")}>
          <ShoppingBasketIcon className="w-6 h-6 relative" />
          {totalBasketItem.shoppingBasket.length > 0 && (
            <span className="absolute  bg-red-500 rounded-full w-5 h-5 flex items-center justify-center top-5 left-10 text-white text-[10px] p-2">
              {totalBasketItem.totalquantity}
            </span>
          )}
        </div>
      </div>
      <CloseWithOnClickScreen
        showModal={showUserAccountMenu}
        setShowModal={setShowUserAccountMenu}
        modalRef={userAccountMenuRef}
      />
    </div>
  );
};

export default Navbar;
