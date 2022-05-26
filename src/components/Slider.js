import React from "react";

const Slider = ({ item }) => {
  return (
    <div className="w-full max-w-[1920px] mx-auto relative pt-[47.65%] z-10 ">
      <img
        src={item.img}
        className="absolute top-0 left-0 right-0 w-full  object-cover   "
        alt=""
      />
    </div>
  );
};

export default Slider;
