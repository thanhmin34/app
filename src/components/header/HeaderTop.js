import React from "react";
import { Link } from "react-router-dom";

import UserIcon from "../icon/UserIcon";
const HeaderTop = () => {
  return (
    <div className="h-[40px] bg-basic  text-[#fff]">
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
          <li className="mr-6">Delivery Information</li>
          <li className="mx-4 list-disc flex items-center">
            <UserIcon />
            <Link to="/" className="ml-2">
              Account
            </Link>
          </li>
          <li className="ml-4 list-disc flex items-center">
            <Link to="/">Arabic</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
