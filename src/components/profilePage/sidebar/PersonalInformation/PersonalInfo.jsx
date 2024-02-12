import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { ArrowLeftIcon, User } from "../../../shared/UI/Icons";

const PersonalInfo = () => {
  const isAuth = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center h-12 gap-2 p-2 bg-red-500 rounded-lg cursor-pointer lg:h-20"
      onClick={() => navigate("/profile/account")}
    >
      <User className="w-4 h-4 text-white lg:w-8 lg:h-8" />
      <p className="pl-12 font-semibold text-white lg:text-xl text-md">
        {isAuth.user.phoneNumber}
      </p>
      <ArrowLeftIcon className="w-4 h-4 ml-2 mr-auto text-white transition duration-500 transform hover:-translate-x-1" />
      <Outlet />
    </div>
  );
};
export default PersonalInfo;
