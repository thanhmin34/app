import React from "react";
import { BiPhone } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { FiMail } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartNumber = useSelector((state) => state.cart.value);

  return (
    <>
      <div className="hidden w-full   h-10 leading-10  bg-[#68b943] md:flex  text-w">
        <div className="flex items-center justify-between w-full px-[15px]  md:px-6  xl:px-8  max-w-[1280px] mx-auto">
          <div className="cursor-pointer flex gap-x-5">
            <div className="flex items-center gap-x-2">
              <BiPhone />
              <a href="tel:+0984080155">0984 080 155</a>
            </div>
            <div className="flex items-center gap-x-2">
              <FiMail />
              <a href="mailto:tinhdauthaiviet@gmail.com">
                tinhdauthaiviet@gmail.com
              </a>
            </div>
          </div>

          <div className="flex  gap-x-4 ">
            <Link to="/login" className="flex items-center">
              <span className="text-base leading-[16px] mr-2"></span>
              <AiOutlineUser />
            </Link>
            <Link to="/thanh-toan" className="flex relative ">
              <HiOutlineShoppingBag />
              <div className="absolute bg-w -top-[6px] -right-[10px]  w-4 h-4 text-xs flex items-center justify-center rounded-full">
                <span className="text-b">{cartNumber.length || 0}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <HeaderBottom />
    </>
  );
};

export default Header;
