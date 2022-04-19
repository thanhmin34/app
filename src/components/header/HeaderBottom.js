import React from "react";
import { Link } from "react-router-dom";
const HeaderBottom = () => {
  return (
    <div className="h-[50px] bg-primary w-full">
      <div className="flex items-center text-[16px] leading-[19px] font-medium  page-container h-full text-w">
        <Link to="/" className=" border-r pr-[15px] hover:opacity-80">
          Offers
        </Link>
        <Link className="px-h" to="/">
          Medications
        </Link>
        <Link className="px-h" to="/">
          Vitamins & Supplements
        </Link>
        <Link className="px-h" to="/">
          Makeup & Beauty
        </Link>
        <Link className="px-h" to="/">
          Skin Care
        </Link>
        <Link className="px-h" to="/">
          Hair Care
        </Link>
        <Link className="px-h" to="/">
          Personal Care
        </Link>
        <Link className="px-h" to="/">
          Mother & Child Care
        </Link>
        <Link className="pl-[15px] hover:opacity-80" to="/">
          Medical Devices & Equipments
        </Link>
      </div>
    </div>
  );
};

export default HeaderBottom;
