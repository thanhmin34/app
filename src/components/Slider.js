import React from "react";

const Slider = ({ src }) => {
  return (
    <div className="pt-[49%] relative flex flex-col mt-2">
      <img
        src={src}
        className="w-full h-full absolute object-cover top-0 left-0 right-0 "
        alt=""
      />
    </div>
  );
};

export default Slider;
