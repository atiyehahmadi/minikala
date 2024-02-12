import React from "react";
import { useNavigate } from "react-router";
import { WalletIcon } from "../../../shared/UI/Icons";

const Wallet = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center m-2 my-4 cursor-pointer"
      onClick={() => navigate("/profile/wallet-management")}
    >
      <WalletIcon className="w-6 h-6  text-neutral-400" />
      <p className="mr-2 text-sm font-semibold">موجودی کیف پول</p>
      <p className="mr-auto text-xs font-semibold">0 ریال</p>
    </div>
  );
};

export default Wallet;
