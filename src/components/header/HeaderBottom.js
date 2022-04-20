import React from "react";
import { Link } from "react-router-dom";
const HeaderBottom = () => {
  return (
    <div className="h-[50px] bg-primary w-full">
      <div className="flex items-center text-[16px] leading-[19px] font-medium  page-container h-full text-w px-2 gap-[7px]">
        <Link to="/" className=" border-r pr-[15px] hover:opacity-80">
          Offers
        </Link>
        {listmenu.length > 0 &&
          listmenu.map((item) => (
            <Link key={item.title} className="px-h " to="/">
              {item.title}
            </Link>
          ))}

        <Link className="pl-[15px] hover:opacity-80" to="/">
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
