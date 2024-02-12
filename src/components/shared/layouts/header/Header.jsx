import React from "react";
import useDeviceType from "../../../../hooks/useDeviceType";
import headerImg from "../../../../assets/images/topBanner/1.gif";
import Navbar from "./navbar/Desktop/Navbar";
import NavbarMobile from "./navbar/Mobile/NavbarMobile";
import NavbarMenu from "./navbarMenu/NavbarMenu";

const Header = () => {
  const { isDesktop } = useDeviceType();
  return (
    <header>
      <img src={headerImg} alt="" />
      {isDesktop ? <Navbar /> : <NavbarMobile />}
      {isDesktop ? <NavbarMenu /> : null}
    </header>
  );
};

export default Header;
