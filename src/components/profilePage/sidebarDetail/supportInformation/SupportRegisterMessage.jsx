import React from "react";
import { AttachFileIcon, PhoneIcon } from "../../../shared/UI/Icons";
import SelectInput from "./SelectInput";

function SupportRegisterMessage() {
  const selectListBoxes = {
    item1: {
      question: " نوع درخواست خود را انتخاب کنید",
      title: [
        "انتخاب کنید",
        "آدرس فروشگاه",
        "اخذ نمایندگی",
        "فروش تلفنی",
        "کد تخفیف",
        "اکالا",
        "مرکز تماس",
        "کالا و مرسوله",
        "نرم افزاری",
        "بازاریابی",
        "سایر موارد",
        "تامین کننده",
        "همکاری",
        "پیشنهاد ملک",
        "قابلیت جدید",
      ],
    },
    item2: {
      question: "سوال",
      title: [
        "انتخاب کنید",
        "آدرس فروشگاه",
        "اخذ نمایندگی",
        "فروش تلفنی",
        "کد تخفیف",
        "اکالا",
      ],
    },
    item3: {
      question: "شکایت",
      title: [
        "انتخاب کنید",
        "مرکز تماس",
        "کالا و مرسوله",
        "نرم افزاری",
        "بازاریابی",
      ],
    },
    item4: {
      question: "پیشنهاد و انتقاد",
      title: [
        "انتخاب کنید",
        "سایر موارد",
        "تامین کننده",
        "همکاری",
        "پیشنهاد ملک",
      ],
    },
    item5: {
      question: "درخواست",
      title: ["انتخاب کنید", "قابلیت جدید"],
    },
  };

  return (
    <div>
      <div className="flex px-4 py-6 my-4 text-sm font-bold text-white bg-red-500 rounded-lg">
        <div>
          <div className="flex">
            <PhoneIcon className="w-5 h-5 ml-1" />
            <h6>مرکز تماس امور مشتریان</h6>
          </div>
          <h6 className="pr-6">1536</h6>
        </div>
        <div className="mr-auto text-left">
          <p>همه روزه</p>
          <p>ساعت 8 تا 22</p>
        </div>
      </div>
      <div className="border-t ">
        <p className="mt-4 text-xs">
          برای پیگیری سفارش یا طرح سوالات خود، از طریق فرم زیر با ما در ارتباط
          باشید . تلاش میکنیم هرچه سریعتر به مشکل شما رسیدگی کنیم
        </p>

        <SelectInput selectList={selectListBoxes} />

        <textarea
          rows="10"
          className="outline-none border-neutral-300 text-neutral-600 w-full p-4 mt-4 text-xs border rounded-lg active:border-red"
          placeholder="لطفا در مورد موضوعی که انتخاب کرده اید توضیح دهید"
        />
        <div className="flex justify-end mt-4  text-xs">
          <button className="flex px-6 py-2 ml-2 font-bold border rounded-md hover:bg-neutral-100">
            <AttachFileIcon className="w-4 h-4 ml-1" />
            پیوست فایل
          </button>
          <button className="px-6 py-2 font-bold text-white bg-red-600 rounded-md ">
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupportRegisterMessage;
