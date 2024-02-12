import React from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import MainLayout from "../shared/layouts/MainLayout";
import PersonalInfo from "./sidebar/PersonalInformation/PersonalInfo";
import Wallet from "./sidebar/PersonalInformation/Wallet";
import AccountDetail from "./sidebarDetail/personalInformation/AccountDetail";
import OrderDetail from "./sidebarDetail/orderInformation/OrderDetail";
import AddressDetail from "./sidebarDetail/addressInformation/AddressDetail";
import WalletDetail from "./sidebarDetail/walletInformation/WalletDetail";
import MessageDetail from "./sidebarDetail/messageinformation/MessageDetail";
import DiscountsDetail from "./sidebarDetail/discountsInformation/DiscountsDetail";
import SupportDetail from "./sidebarDetail/supportInformation/SupportDetail";
import useDeviceType from "../../hooks/useDeviceType";
import dataList from "../../data/jsonFiles/profilePage/profileInfo.json";

const ProfilePage = () => {
  const { profileId } = useParams();
  const { isDesktop } = useDeviceType();
  const { pathname } = useLocation();
  const detail = [
    { path: "account", component: <AccountDetail /> },
    { path: "shopping-history", component: <OrderDetail /> },
    { path: "address", component: <AddressDetail /> },
    { path: "wallet-management", component: <WalletDetail /> },
    { path: "message", component: <MessageDetail /> },
    { path: "discounts", component: <DiscountsDetail /> },
    { path: "support", component: <SupportDetail /> },
  ];

  return (
    <MainLayout hasFooter={false}>
      <div className="items-stretch gap-4 px-10 my-5 bg-white pb-11 lg:grid lg:grid-cols-4">
        <div className="flex flex-col col-span-1 gap-2">
          <div className="p-4 bg-white border rounded-lg border-neutral-200">
            <PersonalInfo />
            <Wallet />
            {dataList.map((item, index) => (
              <Link to={item.path} key={index}>
                <div
                  className={`flex items-center last:border-none border-b border-neutral-100 bg-white active:text-red-500 cursor-pointer px-1 ${
                    pathname.includes(item.path)
                      ? "text-red-500"
                      : "hover:bg-neutral-100"
                  }`}
                >
                  <img src={item.icon} alt="" className="w-5 h-5 mr-2" />
                  <p className="py-2 mr-2 text-sm font-semibold lg:py-4">
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {isDesktop && (
          <div className="col-span-3 p-4 bg-white border rounded-lg border-neutral-200">
            {detail.map((item) => item.path === profileId && item.component)}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
