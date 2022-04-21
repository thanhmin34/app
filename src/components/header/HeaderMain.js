import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../icon/Cart-icon";
import HeartIcon from "../icon/Heart-icon";
import SearchIcon from "../icon/SearchIcon";
import { BiMenu } from "react-icons/bi";
import LeftIcon from "../icon/LeftIcon";
import Close from "../icon/Close";
const listMenu = [
  {
    display: "MEDICATIONS",
  },
  {
    display: "VITAMINS & SUPPLEMENTS",
  },
  {
    display: "MAKEUP & BEAUTY",
  },
  {
    display: "SKIN CARE",
  },
  {
    display: "HAIR CARE",
  },
  {
    display: "PERSONAL CARE",
  },
  {
    display: "MONTHER & CHILD CARE",
  },
  {
    display: "MEDICAL DEVICES & EQUIDMENTS",
  },
  {
    display: "ALL Offers",
  },
];
const HeaderMain = () => {
  const [show, setShow] = useState(false);
  const MenuRef = useRef(null);

  useEffect(() => {
    const hanldeClickOutSide = (e) => {
      if (
        MenuRef.current &&
        !MenuRef.current.contains(e.target) &&
        !e.target.matches("button") &&
        !e.target.matches("svg") &&
        !e.target.matches("path")
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", hanldeClickOutSide);
    return () => {
      document.removeEventListener("click", hanldeClickOutSide);
    };
  }, []);

  return (
    <div className="my-[14px] page-container flex items-center sm:items-start justify-between  px-2 sm:my-0 sm:flex-col  ">
      <div
        className={`overlay fixed top-0 left-0 bottom-0 w-[75%] bg-w z-[100]  ${
          show === true
            ? "translate-x-0 opacity-1"
            : "translate-x-[-100%] opacity-0"
        } transition-all duration-300`}
        ref={MenuRef}
      >
        <header className="h-[56px] flex items-center border-bt">
          <span
            className="px-[18px] cursor-pointer font-bold text-xl"
            onClick={() => setShow(false)}
          >
            <Close />
          </span>
          <h3 className=" text-base font-medium opacity-75 pl-[8px]">
            Main Menu
          </h3>
        </header>
        <ul className="flex flex-col px-[24px] text-base w-full  ">
          {listMenu.length > 0 &&
            listMenu.map((item) => (
              <li
                key={item.display}
                className="h-[56px] flex items-center justify-between border-none border-bt cursor-pointer hover:opacity-80 "
              >
                <span>{item.display}</span>
                <LeftIcon />
              </li>
            ))}

          <li className="flex items-center justify-start h-[49px] cursor-pointer">
            <img
              src="https://pwa-orange.snaptec.co/ar-5ah.png"
              alt=""
              className="w-[16px] h-[11px]"
            />
            <span className="text-xs leading-[17px] ml-[6px] opacity-70 font-[300]">
              Arabic
            </span>
          </li>
        </ul>
      </div>
      <div className="logo h-[72px] sm:h-[60px] sm:flex sm:w-full">
        <div className="flex items-center  h-full sm:text-[16px] sm:justify-between">
          <button
            // ref={btnRef}
            className="hidden sm:flex text-[24px] cursor-pointer px-2 py-1"
            onClick={() => setShow(true)}
          >
            <BiMenu />
          </button>
          <Link to="/">
            <img
              src="	https://pwa-orange.snaptec.co/logo-mobile-fzu.png"
              alt=""
              className="w-[160px]  object-cover  sm:w-[120px] ml-[15px]"
            />
          </Link>
        </div>
        <div className=" hidden sm:flex items-center ml-auto gap-[15px]">
          <div className="flex  w-[25px] cursor-pointer opacity-80">
            <img
              src="https://pwa-orange.snaptec.co/shopping-basket-black-vEa.png"
              alt=""
            />
          </div>
          <div className="flex w-[25px] cursor-pointer opacity-80 ">
            <img
              src="https://pwa-orange.snaptec.co/user-black-8U2.png"
              alt=""
              className=" "
            />
          </div>
        </div>
      </div>
      <div className="control flex items-center justify-end gap-[15px] sm:hidden ">
        <Input />
        <button className="flex items-center justify-center  bg-secondary py-[8px] px-[6px] w-[130px]  md:w-[40px] hover:opacity-80 ">
          <HeartIcon />
          <span className="text-w ml-[10px] md:hidden">Wishlist</span>
        </button>
        <button className="flex items-center justify-center  bg-secondary py-[8px] px-[6px] w-[170px] md:w-[40px] hover:opacity-80 ">
          <CartIcon />
          <span className="text-w ml-[10px] font-[14px] md:hidden">
            Shopping Cart
          </span>
        </button>
      </div>
      <div className="sm:block hidden sm:h-[40px] sm:my-[15px] w-full max-w-[300px] mx-auto ">
        <Input />
      </div>
    </div>
  );
};

function Input() {
  return (
    <div className="input flex items-center justify-start flex-1 border border-[#E5E5E5] search  ">
      <input
        type="text"
        className="text-[14px] px-[15px] py-[12px] flex-1 text-[#7C7C7C] w-[380px] inputElement"
        placeholder="Search for a product, brand, category.."
      />
      <SearchIcon />
    </div>
  );
}
export default HeaderMain;
