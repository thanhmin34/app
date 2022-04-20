import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { ProductItem } from "./Section";

const Section3 = ({ title }) => {
  return (
    <div className="mt-[70px]">
      <h2 className="text-[30px] font-medium leading-[39px] text-center text-basic mb-[50px]">
        {title}
      </h2>
      <div className="grid grid-cols-6 gap-5 mb-[100px]">
        {brands.length > 0 &&
          brands.map((item, index) => (
            <Link key={index} to="/">
              <img src={item.logo} alt="" />
            </Link>
          ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-[30px]">
        <Button tx="text-w" bg="bg-[#00AFAA]">
          Seasonal highlights
        </Button>
        <Button tx="text-[#023047]" bg="bg-[#E5E5E5]">
          Popular
        </Button>
        <Button tx="text-[#023047]" bg="bg-[#E5E5E5]">
          New products
        </Button>
        <Button tx="text-[#023047]" bg="bg-[#E5E5E5]">
          Recommendation
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-[31px]">
        {data3.length > 0 &&
          data3.map((item, index) => <ProductItem key={index} src={item} />)}
      </div>
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
