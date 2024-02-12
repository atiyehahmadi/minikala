import React from "react";
import { ArrowBottomIcon, UserIcon } from "../../../../UI/Icons";
import useDeviceType from "../../../../../../hooks/useDeviceType";

const AuthBtn = ({ openUserAccountMenu }) => {
  const { isDesktop } = useDeviceType();
  return (
    <button
      type="button"
      className="p-2 bg-white cursor-pointer  focus:bg-neutral-100 focus:rounded-lg"
      onClick={openUserAccountMenu}
    >
      <div className="flex items-center gap-1">
        <UserIcon className="w-20 h-20" />
        {isDesktop && <ArrowBottomIcon className="w-3 h-3" />}
      </div>
    </button>
  );
};

export default AuthBtn;
