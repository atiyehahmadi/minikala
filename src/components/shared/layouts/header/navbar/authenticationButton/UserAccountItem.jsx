import React from "react";

const UserAccountItem = ({ title, click, classes }) => {
  return (
    <div
      className="flex items-center w-56 gap-3 px-4 text-neutral-800  cursor-pointer  sm:border-b border-none border-neutral-200"
      onClick={click}
    >
      <div className={` w-full ${classes}`}>
        <p className="py-3 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default UserAccountItem;
