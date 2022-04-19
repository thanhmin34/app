import React from "react";
import { Images, ProductItem } from "./Section";
import propTypes from "prop-types";
const Section2 = ({ title, data1, img }) => {
  return (
    <div className="mt-[70px]">
      <h2 className="text-[30px] font-medium leading-[39px] text-center text-basic mb-[50px]">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-[30px] mb-[50px]">
        {data1.length > 0 &&
          data1.map((item, index) => <Images key={index} src={item.src} />)}
      </div>
      <div className="flex items-center">
        <div className="basis-3/12">
          <img src="/care3.png" alt="" />
        </div>
        <div className="basis-6/12">
          <img src="/care4.png" alt="" />
        </div>
        <div className="basis-3/12">
          <img src="/care5.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[30px] ">
        {img.length > 0 &&
          img.map((item, index) => <ProductItem key={index} src={item} />)}
      </div>
    </div>
  );
};

Section2.propTypes = {
  data1: propTypes.array.isRequired,

  title: propTypes.string,
};
export default Section2;
