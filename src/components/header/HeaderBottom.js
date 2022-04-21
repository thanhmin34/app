import React from "react";
import { Link } from "react-router-dom";
const HeaderBottom = () => {
  return (
    <div className="h-[50px] bg-primary w-full md:h-[170px] sm:hidden ">
      <div className="flex items-center text-[16px] leading-[19px] font-medium  page-container h-full text-w px-2 gap-[7px] md:grid md:grid-cols-5 md:gap-[20px] md:justify-center md:py-[30px] ">
        <Link
          to="/"
          className=" xl:border-r pr-[15px] hover:opacity-80 md:pr-0 flex items-center justify-center"
        >
          Offers
        </Link>
        {listmenu.length > 0 &&
          listmenu.map((item) => (
            <Link
              key={item.title}
              className="px-h flex items-center justify-center"
              to="/"
            >
              {item.title}
            </Link>
          ))}

        <Link
          className="pl-[15px] hover:opacity-80 flex items-center justify-center md:pl-0"
          to="/"
        >
          Medical Devices & Equipments
        </Link>
      </div>
    </div>
  );
};

const listmenu = [
  { title: "Medications" },
  { title: " Vitamins & Supplements" },
  { title: " Makeup & Beauty" },
  { title: " Skin Care" },
  { title: "Hair Care" },
  { title: "Personal Care" },
  { title: "Mother & Child Care" },
];
export default HeaderBottom;
