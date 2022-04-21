import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { ProductItem } from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
const Section3 = ({ title }) => {
  return (
    <div className="mt-[70px]">
      <h2 className="text-[30px] font-medium leading-[39px] text-center text-basic mb-[50px]">
        {title}
      </h2>
      <div className="grid grid-cols-6 gap-5 mb-[100px] s2:grid-cols-3 s2:mb-[32px] md:mb-[50px]">
        {brands.length > 0 &&
          brands.map((item, index) => (
            <Link
              key={index}
              to="/"
              className="flex items-center justify-center"
            >
              <img src={item.logo} alt="" />
            </Link>
          ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-[30px] s2:flex s2:items-center s2:flex-col ">
        <Button tx="text-w" bg="bg-[#00AFAA] s2:w-full">
          Seasonal highlights
        </Button>
        <Button tx="text-[#023047]" bg="bg-[#E5E5E5] s2:w-full">
          Popular
        </Button>
        <Button tx="text-[#023047]" bg="bg-[#E5E5E5] s2:w-full">
          New products
        </Button>
        <Button tx="text-[#023047]" bg="bg-[#E5E5E5] s2:w-full">
          Recommendation
        </Button>
      </div>
      {/* <div className="grid grid-cols-4 gap-[31px] md:grid-cols-3 ">
        {data3.length > 0 &&
          data3.map((item, index) => <ProductItem key={index} src={item} />)}
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
        {data3.length > 0 &&
          data3.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItem src={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

const brands = [
  { logo: "/brand/logo1.png" },
  { logo: "/brand/logo2.png" },
  { logo: "/brand/logo3.png" },
  { logo: "/brand/logo4.png" },
  { logo: "/brand/logo5.png" },
  { logo: "/brand/logo5.png" },
];
const data3 = [
  {
    value: "/h6.png",
    card: "New",
    priceSale: "20.00",
  },
  {
    value: "/h5.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
    addcar: true,
  },

  {
    value: "/h8.png",
    card: "New",
    priceSale: "20.00",
  },
  {
    value: "/h7.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
];
export default Section3;
