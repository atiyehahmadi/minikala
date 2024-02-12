import React from "react";

const NavbarMenuItem = ({
  icon,
  text,
  textClasses,
  classes,
  mouseEnter,
  mouseLeave,
  clicked,
}) => {
  return (
    <div
      className={`flex flex-shrink-0 min-h-[3.1rem] items-center first:text-black text-neutral-500 text-xs first:text-lg  first:font-bold  font-extralight  cursor-pointer border-white border-b-2 hover:border-b-2 hover:border-b-red-500 py-3 ${classes}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={clicked}
    >
      <img src={icon} alt="" className="w-5 h-5" />
      <p className={`px-1 ${textClasses}`}>{text}</p>
    </div>
  );
};

export default NavbarMenuItem;
