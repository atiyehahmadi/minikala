import React, { useState, useEffect } from "react";
import { ArrowLeftIcon } from "../../../../../shared/UI/Icons";

const SubItemMenuList = ({ activeId }) => {
  const [menuTitle, setMenuTitle] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/megaMenuList?id=${activeId}`)
      .then((response) => response.json())
      .then((result) => setMenuTitle(result[0].subMenu))
      .catch((error) => console.log(error));
  }, [activeId]);
  return (
    <>
      <div className="grid grid-flow-col grid-rows-12 gap-y-1 lg:gap-x-10 gap-x-14">
        {menuTitle?.map((item, index) => (
          <React.Fragment key={index}>
            <div className="py-1 font-bold cursor-pointer hover:text-red-500 xl:w-full w-36">
              <div className="flex items-center gap-x-1">
                <span className="flex pl-1 text-red-500 border-1">|</span>
                <p className="truncate"> {item.title}</p>
                <ArrowLeftIcon className="w-3 h-3" />
              </div>
            </div>
            {item.data?.map((subItem, index1) => (
              <div
                key={index1}
                className="text-neutral-500 cursor-pointer hover:text-red-500 text-[12px] py-1 truncate"
              >
                {subItem}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
export default SubItemMenuList;
