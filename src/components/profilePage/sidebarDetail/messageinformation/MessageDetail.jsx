import React from "react";
import TitleSidebarDetail from "../TitleSidebarDetail";
import EmptyItem from "../EmptyItem";
import EmptyNotification from "../../../../assets/images/icons/EmptyNotification.svg";

const MessageDetail = () => {
  return (
    <>
      <TitleSidebarDetail title="پیام های من" />
      <EmptyItem img={EmptyNotification} message="پیامی موجود نیست" />
    </>
  );
};

export default MessageDetail;
