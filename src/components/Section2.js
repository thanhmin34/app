import React from "react";
import { Images, ProductItem } from "./Section";
import propTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
const Section2 = ({ title, data1, img }) => {
  return (
    <div className="mt-[70px]">
      <h2 className="text-[30px] font-medium leading-[39px] text-center text-basic mb-[50px]">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-[30px] mb-[50px] s2:hidden">
        {data1.length > 0 &&
          data1.map((item, index) => <Images key={index} src={item.src} />)}
      </div>
      <div className="grid grid-cols-1 mb-[50px] s1:hidden">
        {data1.length > 0 &&
          data1
            .slice(0, 1)
            .map((item, index) => <Images key={index} src={item.src} />)}
      </div>

      <div className="flex items-center gap-2 s2:hidden">
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
      {/* <div className="grid grid-cols-4 gap-[30px] mt-[50px] md:grid-cols-3 sm:grid-cols-1">
        {img.length > 0 &&
          img.map((item, index) => <ProductItem key={index} src={item} />)}
      </div> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={4}
        navigation
        breakpoints={{
          1240: {
            minWidth: 1240,
            slidesPerView: 4,
          },

          678: {
            minWidth: 678,
            slidesPerView: 3,
          },
          320: {
            minWidth: 300,
            slidesPerView: 2,
          },
        }}
      >
        {img.length > 0 &&
          img.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItem src={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

Section2.propTypes = {
  data1: propTypes.array.isRequired,

  title: propTypes.string,
};
export default Section2;
