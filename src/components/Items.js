import React from "react";
import propTypes from "prop-types";

const Items = ({ title, desc, icon }) => {
  return (
    <div className="bg-[#E5E5E5] flex items-center justify-center h-40 px-[57px]">
      {icon}
      <div className="flex flex-col ml-[27px] text-[#023047] ">
        <h3 className="mb-[12px] font-medium text-[24px] leading-[24px] ">
          {title}
        </h3>
        <p className="text-[16px] leading-[22px] ">{desc}</p>
      </div>
    </div>
  );
};

Items.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
  icon: propTypes.string.isRequired,
};
export default Items;
