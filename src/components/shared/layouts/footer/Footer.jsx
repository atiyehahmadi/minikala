import React from "react";
import ContactUs from "./ContactUs";
import useDeviceType from "../../../../hooks/useDeviceType";
import OnlineSupport from "../footer/onlineSupport/OnlineSupport";
import AppLogo from "../../../../assets/images/footer/footerlogo.png";
import LogoPersian from "../../../../assets/images/LogoPersian.svg";
import AppIcon from "../../../../data/jsonFiles/footer/appIcon.json";
import servicesList from "../../../../data/jsonFiles/footer/services.json";
import StandardsIcon from "../../../../data/jsonFiles/footer/standards.json";
import footerData from "../../../../data/jsonFiles/footer/footerData.json";
import {
  ArrowLeftIcon,
  ArrowTopIcon,
  DotesIcon,
} from "../../../shared/UI/Icons";

const Footer = () => {
  const { isDesktop, isMobile } = useDeviceType();
  const scrollToTopHandler = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  return (
    <footer className="footer">
      <div className="relative flex flex-col gap-4 mx-6 mt-8 border-t border-t-neutral-300">
        <div className="flex justify-between my-6">
          <img src={LogoPersian} alt="" />
          <button className="px-4 border rounded-lg text-neutral-400 border-neutral-300">
            <div
              className="flex items-center justify-center gap-2"
              onClick={scrollToTopHandler}
            >
              <p className="text-sm">بازگشت به بالا</p>
              <ArrowTopIcon className="w-4 h-4" />
            </div>
          </button>
        </div>
        <div className="gap-6 text-sm lg:flex">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <span className="text-xs text-white lg:text-black">|</span>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        {isDesktop && (
          <div className="flex justify-around my-8">
            {servicesList.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt="" className="mx-auto" />
                <p className="text-xs">{item.title}</p>
              </div>
            ))}
          </div>
        )}
        <div className="lg:flex">
          <div className="grid grid-flow-row grid-cols-2 gap-6 lg:grid-cols-3">
            {footerData.map((item, index) => (
              <div key={index} className="leading-8 text-md ">
                <p className="font-bold">{item.title}</p>
                {item.data.map((item, index) => (
                  <p key={index} className="text-neutral-400">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <ContactUs />
        </div>
        <div className="items-center justify-between p-4 bg-blue-900 rounded-lg lg:flex">
          <div className="flex items-center justify-center gap-2">
            <img src={AppLogo} alt="logo" className="w-8 h-8 lg:w-14 lg:h-14" />
            <p className="text-lg font-bold text-white lg:text-2xl">
              {" "}
              دانلود اپلیکیشن مینی‌کالا
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 my-6 lg:my-0">
            {AppIcon.map((item, index) => (
              <a href="" key={index}>
                <img src={item} />
              </a>
            ))}
            {isDesktop && (
              <div className="bg-white rounded-lg">
                <DotesIcon className="w-10 h-10 font-bold text-blue-800" />
              </div>
            )}
          </div>
          {isMobile && (
            <div className="flex items-center justify-center gap-1 text-white">
              <p className="text-sm">اطلاعات بیشتر</p>
              <ArrowLeftIcon className="w-3 h-3" />
            </div>
          )}
        </div>
        <div className="justify-between py-6 mx-2 my-4 lg:flex border-y border-y-neutral-300">
          <div className="lg:w-1/2">
            <p className="my-4 text-lg font-bold">
              فروشگاه اینترنتی مینی‌کالا، بررسی، انتخاب و خرید آنلاین
            </p>
            <p className="text-sm leading-7 text-neutral-400">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی مینی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
            <div className="flex items-end gap-2 py-4 font-bold text-teal-400">
              <p className="text-sm">مشاهده بیشتر</p>
              <ArrowLeftIcon className="w-3 h-3 font-bold" />
            </div>
          </div>
          <div className="flex justify-center gap-2 lg:items-start">
            {StandardsIcon.map((item, index) => (
              <div
                key={index}
                className="p-4 border border-neutral-300 rounded-lg min-h-[6.5rem]"
              >
                <img src={item} alt="" className="w-16" />
              </div>
            ))}
          </div>
        </div>
        <p className="mb-4 text-xs text-center text-neutral-400">
          برای استفاده از مطالب مینی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین مینی‌کالا) است.
        </p>
      </div>

      <div className="sticky flex px-6 bottom-10">
        {isDesktop && <OnlineSupport />}
      </div>
    </footer>
  );
};

export default Footer;
