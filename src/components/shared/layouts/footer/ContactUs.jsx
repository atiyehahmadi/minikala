import React from "react";
import SocialMediaIcons from "../../../../data/jsonFiles/footer/socialMedia.json";

const ContactUs = () => {
  return (
    <div className="mr-auto">
      <div className="flex my-8 lg:flex-col">
        <p className="font-bold"> همراه ما باشید!</p>
        <div className="flex gap-6 mr-auto lg:my-6">
          {SocialMediaIcons.map((item, index) => (
            <img src={item} alt="" key={index} className="w-8 h-8 max-h-8 " />
          ))}
        </div>
      </div>
      <div className="">
        <p className="font-bold">
          با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
        </p>
        <div className="flex gap-2 my-4 font-bold">
          <input
            type="text"
            placeholder="ایمیل شما"
            className="w-full p-3 border-none rounded-lg bg-neutral-100 text-neutral-300 focus:outline-none"
          />
          <button className="p-2 text-black rounded-lg bg-neutral-100">
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
