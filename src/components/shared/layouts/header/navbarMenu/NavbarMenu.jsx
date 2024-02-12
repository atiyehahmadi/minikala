import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Menu from "../menu/Desktop/Menu";
import NavbarMenuItem from "./NavbarMenuItem";
import navbarItem from "../../../../../data/jsonFiles/header/navbarItem.json";
import { hiddenDropDown } from "../../../../../redux/searchDropDown/DropDownIndex";

const NavbarMenu = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative w-full border-b border-b-neutral-300">
      <div className="flex items-center gap-3 mx-4 bg-white ">
        <NavbarMenuItem
          icon="https://img.icons8.com/pulsar-line/48/bulleted-list.png"
          text="دسته‌بندی کالاها"
          textClasses="text-base"
          mouseEnter={() => {
            setOpenMenu(true);
            dispatch(hiddenDropDown());
          }}
          mouseLeave={() => {
            setOpenMenu(false);
            dispatch(hiddenDropDown());
          }}
        />
        <span className="text-xl font-thin text-neutral-300">|</span>
        {navbarItem.map((item, index) => (
          <NavbarMenuItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
    </div>
  );
};

export default NavbarMenu;
