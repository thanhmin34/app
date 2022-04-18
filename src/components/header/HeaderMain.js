import React from "react";
import DescNameLogo from "../../logo/DescNameLogo";
import NameLogo from "../../logo/NameLogo";
import CartIcon from "../icon/Cart-icon";
import HeartIcon from "../icon/Heart-icon";
import SearchIcon from "../icon/SearchIcon";

const HeaderMain = () => {
  return (
    <div className="my-[40px] page-container flex items-center justify-between">
      <div className="logo h-[76px] ">
        <div className="flex items-center h-full">
          <svg
            width="50"
            height="52"
            viewBox="0 0 50 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.2481 5.01513L34.7539 13.8348H34.7407C34.7407 13.8348 34.7407 13.8348 34.7539 13.848C31.7391 13.7951 29.5177 14.3769 28.116 14.919C30.4433 15.5273 32.506 16.7967 34.0928 18.5157C34.1192 18.5421 34.1457 18.5553 34.1721 18.5818C35.9043 20.4726 36.9621 22.6412 37.3324 25.1006C37.4514 25.9469 37.491 26.7667 37.4514 27.5865C37.1869 34.2905 31.6862 39.6325 24.9426 39.6325C18.027 39.6325 12.4205 34.0128 12.4205 27.0708C12.4205 24.5188 13.1874 22.1387 14.4965 20.1553C15.2238 19.0446 16.1361 18.0661 17.1675 17.233C19.0055 15.448 21.2005 14.1918 23.7525 13.4513C26.3839 12.6844 30.8003 12.5786 33.1936 13.0943L35.2299 1.03506C32.2812 0.413582 29.3193 0.440027 27.2301 0.572255C24.8103 0.730929 21.1873 1.24662 17.6832 2.71436C13.875 4.31432 10.5561 6.69443 7.84541 9.69602C3.66699 13.967 1.03565 19.7718 0.850527 26.1849C0.810858 26.37 0.810859 26.5684 0.810859 26.7667C0.810859 26.8064 0.810859 26.8461 0.810859 26.8857C0.810859 26.9122 0.810859 26.9254 0.810859 26.9518C0.797636 29.1072 1.04887 31.2625 1.61745 33.4046C3.11163 39.0772 6.3909 43.7184 11.1776 46.958C15.1444 49.7745 19.984 51.4273 25.2202 51.4273C38.6943 51.4273 49.6296 40.4391 49.6296 26.8857C49.6032 17.3256 44.1686 9.06132 36.2481 5.01513Z"
              fill="#00AFAA"
            />
          </svg>
          <div className="header-name flex flex-col ml-[15px]">
            <div className="flex flex-col items-center justify-center mt-[18px]">
              <NameLogo />
              <DescNameLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="control flex items-center flex-1 ml-[226px] ">
        <div className="input flex items-center justify-start flex-1 border border-[#E5E5E5] ">
          <input
            type="text"
            className="text-[14px] pl-[15px] py-[12px] flex-1"
            placeholder="Search for a product, brand, category.."
          />
          <SearchIcon />
        </div>
        <button className="flex items-center justify-center mr-[15px] ml-[30px] bg-secondary py-[8px] px-[24px] ">
          <HeartIcon />
          <span className="text-w ml-[10px]">Wishlist</span>
        </button>
        <button className="flex items-center justify-center  bg-secondary py-[8px] px-[24px] ">
          <CartIcon />
          <span className="text-w ml-[10px] font-[14px]">Shopping Cart</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderMain;
