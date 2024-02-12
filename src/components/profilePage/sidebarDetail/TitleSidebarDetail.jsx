import React from "react";
import { useNavigate } from "react-router";
import useDeviceType from "../../../hooks/useDeviceType";
import { ArrowRightIcon } from "../../shared/UI/Icons";

function TitleSidebarDetail({ title }) {
  const { isMobile } = useDeviceType();
  const navigate = useNavigate();
  return (
    <div className="flex items-end gap-2 pt-4 pb-10 font-bold">
      {isMobile && (
        <ArrowRightIcon
          className="w-5 h-5 cursor-pointer"
          click={() => navigate("/profile")}
        />
      )}
      <h6 className="px-2 border-red-400 lg:border-r-4"> {title}</h6>
    </div>
  );
}

export default TitleSidebarDetail;
