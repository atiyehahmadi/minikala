import React, { useState } from "react";
import TitleSidebarDetail from "../../TitleSidebarDetail";
import CustomInput from "../../CustomInput";

function EditAddressDetail({ closeModal }) {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxHandler = (event) => {
    if (event.target.checked == true) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };
  return (
    <div className="w-full px-6 py-4 bg-white rounded-2xl">
      <TitleSidebarDetail title="جزییات آدرس" />
      <CustomInput type="text" label="آدرس تحویل گیرنده *" />
      <div className="flex">
        <CustomInput type="text" label="پلاک *" />
        <CustomInput type="text" label="واحد *" />
      </div>
      <div className="flex items-center mx-2 mt-4">
        <input
          className="w-4 h-4"
          type="checkbox"
          value={isChecked}
          onChange={checkboxHandler}
        />
        <label className="pr-2 text-sm">تحویل گیرنده خودم نیستم</label>
      </div>
      {isChecked && (
        <div className="flex">
          <CustomInput type="text" placeholder="نام تحویل گیرنده" />
          <CustomInput type="text" placeholder="موبایل تحویل گیرنده" />
        </div>
      )}
      <div className="pb-3 mx-2 mt-8">
        <div className="flex justify-end">
          <button
            className="px-4 py-2 ml-2 font-semibold text-red-600 border-2 rounded-lg hover:bg-neutral-100 focus:bg-red-200 focus:border-red-200"
            type="button"
            onClick={closeModal}
          >
            بازگشت
          </button>
          <button
            className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
            type="button"
          >
            ثبت نهایی آدرس
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditAddressDetail;
