import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import MenuMobile from "../../menu/Mobile/MenuMobile";
import NavbarMenuItem from "../../navbarMenu/NavbarMenuItem";
import CloseWithOnClickScreen from "../../../../../shared/logic/CloseWithOnClickScreen";
import InputSearch from "../searchBox/InputSearch";
import SearchDropDown from "../searchBox/SearchDropDown";
import UserAccountMenuMobile from "./UserAccountMenuMobile";
import AuthBtn from "../authenticationButton/AuthBtn";
import EntranceBtn from "../authenticationButton/EntranceBtn";
import { Logo } from "../../../../../shared/UI/Logo";
import {
  ArrowLeftIcon,
  Bars3Icon,
  ShoppingBasketIcon,
} from "../../../../../shared/UI/Icons";

const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showUserAccountMenu, setShowUserAccountMenu] = useState(false);
  const isAuth = useSelector((state) => state.userInfo);
  const totalBasketItem = useSelector((state) => state.shoppingBasketInfo);
  const toggleDropDown = useSelector((state) => state.toggleDropDown);
  const navigate = useNavigate();
  const MenuRef = useRef();

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);
  return (
    <>
      <div className="z-30 bg-white">
        <div ref={MenuRef}>
          <div className="flex justify-between px-4 py-3 align-middle border-b border-b-neutral-200">
            <Bars3Icon
              className="w-6 h-6 cursor-pointer"
              click={() => setOpenMenu(true)}
            />
            <Logo className="w-24" />
          </div>
          {openMenu && <MenuMobile />}
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold border-b border-b-neutral-200">
          <div className="w-4/5">
            <div className="relative flex w-full">
              <InputSearch />
              {toggleDropDown.dropDownState && <SearchDropDown />}
            </div>
          </div>
          <div className="relative flex items-center gap-4">
            {isAuth.user != null ? (
              <AuthBtn
                openUserAccountMenu={() => setShowUserAccountMenu(true)}
              />
            ) : (
              <EntranceBtn
                className="bg-white"
                text={"ورود"}
                click={() => navigate("/login")}
              />
            )}
            <div
              className="cursor-pointer"
              onClick={() => navigate("/checkout")}
            >
              <ShoppingBasketIcon className="relative w-6 h-6" />
              {totalBasketItem.shoppingBasket.length > 0 && (
                <span className="absolute top-2 left-4 bg-red-500 rounded-full justify-center text-white text-[10px] p-1 w-4 h-4 flex items-center text-center">
                  {totalBasketItem.totalquantity}
                </span>
              )}
            </div>
          </div>
        </div>

        <CloseWithOnClickScreen
          showModal={openMenu}
          setShowModal={setOpenMenu}
          modalRef={MenuRef}
        />
      </div>
      {showUserAccountMenu && (
        <UserAccountMenuMobile
          setShowUserAccountMenu={setShowUserAccountMenu}
        />
      )}
      <div
        className={`${
          openMenu ? "bg-black opacity-40 fixed inset-0 z-10 " : ""
        }`}
      ></div>
    </>
  );
};

export default NavbarMobile;
