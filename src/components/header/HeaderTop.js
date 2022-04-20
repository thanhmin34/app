import React from "react";
import { Link } from "react-router-dom";

import UserIcon from "../icon/UserIcon";

const HeaderTop = () => {
  return (
    <div className="h-[40px] bg-basic  text-[#fff] px-2">
      <div className="page-container  flex justify-between h-full">
        <ul className="flex items-center gap-[14px] justify-start  font-[14px] leading-[17px]">
          <li className="">info: 9200067</li>
          <li className=" list-disc mx-4">
            <Link to="/">About</Link>
          </li>
          <li className="list-disc mx-4">
            <Link to="/">Branches</Link>
          </li>
        </ul>
        <ul className="flex items-center font-[14px] leading-[17px]">
          <li className=" font-[300] text-base pr-6">Delivery Information</li>
          <li className="px-4  flex items-center list-disc">
            <UserIcon />
            <Link to="/" className="ml-2">
              Account
            </Link>
          </li>
          <li className="pl-[15px]  flex items-center list-disc cursor-pointer">
            <img
              src="../language.png"
              alt=""
              className="w-5 h-[14px] object-cover relative top-[-1px]"
            />
            <span className="ml-[7px] cursor-pointer">Arabic</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
