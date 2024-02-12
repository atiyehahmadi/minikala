import React from "react";
import { useSelector } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TitleSidebarDetail from "../TitleSidebarDetail";
import EditGenderBtn from "./EditGenderBtn";
import TextError from "./TextError";
import { UserIcon } from "../../../shared/UI/Icons";

const initialValues = {
  firstName: "",
  lastName: "",
  date: "",
  email: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("این قسمت نمیتواند خالی باشد"),
  lastName: Yup.string().required("این قسمت نمیتواند خالی باشد"),
  date: Yup.string().required("این قسمت نمیتواند خالی باشد"),
  email: Yup.string()
    .email("پست الکترونیک وارد شده درست نیست")
    .required("این قسمت نمیتواند خالی باشد"),
});
const onSubmit = (values) => {
  console.log("formik", values);
};
const AccountDetail = () => {
  const isAuth = useSelector((state) => state.userInfo);
  const list = [
    { nameId: "firstName", type: "text", labelText: "نام" },
    { nameId: "lastName", type: "text", labelText: "نام و نام خانوادگی" },
    { nameId: "date", type: "text", labelText: "تاریخ تولد" },
    { nameId: "email", type: "email", labelText: "ایمیل" },
  ];
  return (
    <>
      <TitleSidebarDetail title="مشخصات حساب کاربری" />
      <div className="flex items-center pb-4">
        <UserIcon className="text-neutral-600 bg-neutral-200 h-8 w-8 ml-2 rounded-full" />
        <p className="text-neutral-500">{isAuth.user.phoneNumber}</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 grid-flow-row gap-4 gap-y-0">
            {list.map((item, index) => (
              <div className="flex flex-col w-full py-2 " key={index}>
                <label
                  className="bg-white text-sm font-bold text-neutral-500 px-2 mb-2 border-neutral-200"
                  htmlFor={item.nameId}
                >
                  {item.labelText}
                </label>
                <Field
                  className="border rounded-lg outline-none p-2"
                  type={item.type}
                  name={item.nameId}
                  placeholder={item.labelText}
                />
                <ErrorMessage name={item.nameId} component={TextError} />
              </div>
            ))}
          </div>
          <div className="flex w-1/2">
            <EditGenderBtn
              gender="خانم"
              icon={<UserIcon className="h-6 w-6" />}
            />
            <EditGenderBtn
              gender="آقا"
              icon={<UserIcon className="h-6 w-6" />}
            />
          </div>
          <button
            type="submit"
            className="flex justify-center bg-red-500 text-white text-sm rounded-lg p-8 py-3 mr-auto mx-4"
          >
            ثبت تغییرات
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AccountDetail;
