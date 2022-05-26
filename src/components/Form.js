import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "emailjs-com";
const schema = yup.object({
  name: yup.string().required("trường này là bắt buộc"),
  email: yup.string().email().required("trường này là bắt buộc"),
  address: yup.string().required("trường này là bắt buộc"),
  wart: yup.string().required("trường này là bắt buộc"),
  city: yup.string().required("trường này là bắt buộc"),
  province: yup.string().required("trường này là bắt buộc"),
  phone: yup
    .number()
    .required("vui lòng nhập SĐT")
    .typeError("Đó không phải là số điện thoại")
    .positive("Số điện thoại không được bắt đầu bằng dấu trừ")
    .integer("Số điện thoại không được bao gồm phân tích thập phân")
    .min(10),
});
const Form = ({ cart }) => {
  const refForm = useRef(null);
  console.log(cart);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const proRef = collection(db, "checkOutProducts");
    const res = await addDoc(proRef, {
      ...data,
      products: [...cart],
      ship: 20000,
    });
    emailjs
      .sendForm(
        "service_ulndg36",
        "template_bxbq6x7",
        refForm.current,
        "6GQsse_J_olEZBijY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={refForm}
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className=" w-full  max-w-[360px] mx-auto md:max-w-[500px] md:mx-0 x2:max-w-[650px]"
    >
      <div className="my-4 relative text-sm  ">
        <input
          type="text"
          name="name"
          placeholder=" "
          {...register("name")}
          className=" px-2 py-2 border bg-w border-[#d1d1d1] text-sm w-full outline-none focus:border-d transition-all duration-150 inputElement"
        />
        <LabelForm title=" Họ và Tên" />
        <span className="text-[#cc4242] font-medium text-base ">
          {errors?.name?.message || ""}
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-x-2 my-4 gap-y-4">
        <div className="flex flex-col md:w-full relative text-sm">
          <input
            type="text"
            name="phone"
            placeholder=" "
            {...register("phone")}
            className="bg-w px-2 py-2 text-[#333] border border-[#d1d1d1] text-sm w-full outline-none focus:border-d transition-all duration-150 inputElement"
          />

          <LabelForm title="Số điện thoại" />

          <span className="text-[#cc4242] font-medium text-base">
            {errors?.phone?.message || ""}
          </span>
        </div>
        <div className="flex flex-col md:w-full relative text-sm">
          <input
            type="email"
            name="email"
            placeholder=" "
            {...register("email")}
            className="bg-w px-2 py-2 text-[#333] border border-[#d1d1d1] text-sm w-full outline-none focus:border-d transition-all duration-150 inputElement"
          />

          <LabelForm title="Địa chỉ email" />

          <span className="text-[#cc4242] font-medium text-base">
            {errors?.email?.message || ""}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-2 my-4 gap-y-4">
        <div className="flex flex-col md:w-full relative text-sm">
          <input
            type="text"
            name="address"
            placeholder=" "
            {...register("address")}
            className="bg-w px-2 py-2 text-[#333] border border-[#d1d1d1] text-sm w-full outline-none focus:border-d transition-all duration-150 inputElement"
          />

          <LabelForm title="Địa chỉ giao hàng" />

          <span className="text-[#cc4242] font-medium text-base">
            {errors?.address?.message || ""}
          </span>
        </div>
        <div className="flex flex-col md:w-full relative text-sm">
          <input
            type="text"
            name="wart"
            placeholder=" "
            {...register("wart")}
            className="bg-w px-2 py-2 text-[#333] border border-[#d1d1d1] text-sm w-full outline-none focus:border-d transition-all duration-150 inputElement"
          />

          <LabelForm title="Phường xã" />

          <span className="text-[#cc4242] font-medium text-base">
            {errors?.wart?.message || ""}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-2 my-4 gap-y-4">
        <div className="flex flex-col md:w-full relative text-sm">
          <input
            type="text"
            name="city"
            placeholder=" "
            {...register("city")}
            className="bg-w px-2 py-2 text-[#333] border border-[#d1d1d1] text-sm w-full outline-none focus:border-d transition-all duration-150 inputElement"
          />

          <LabelForm title="Thành phố/ Huyện" />

          <span className="text-[#cc4242] font-medium text-base">
            {errors?.city?.message || ""}
          </span>
        </div>
        <div className="flex flex-col md:w-full relative text-sm">
          <input
            type="text"
            name="province"
            placeholder=" "
            {...register("province")}
            className="bg-w px-2 py-2 text-[#333] border border-[#d1d1d1] text-sm w-full outline-none focus:border-d transition-all duration-150 inputElement"
          />

          <LabelForm title="Tỉnh" />

          <span className="text-[#cc4242] font-medium text-base">
            {errors?.province?.message || ""}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="outline-none border-none bg-d py-2 text-w  px-8 rounded hover:opacity-80 mt-4 md:w-full md:max-w-[184px]"
      >
        Đặt Hàng
      </button>
    </form>
  );
};

function LabelForm({ title }) {
  return (
    <label
      htmlFor=""
      className=" absolute top-0 -translate-y-[-50%]  left-[9px] text-sm  text-[#999]   labelFrom pointer-events-none  transition-all duration-150  ;"
    >
      {title}
    </label>
  );
}
export default Form;
