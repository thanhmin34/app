import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const HeaderBottom = () => {
  const navRef = useRef(null);
  useEffect(() => {
    const hanldeScroll = () => {};
    document.addEventListener("scroll", hanldeScroll);
    return () => {
      document.removeEventListener("scroll", hanldeScroll);
    };
  }, []);
  return (
    <div className="h-[50px] bg-primary w-full md:h-[170px] sm:hidden ">
      <div
        ref={navRef}
        className="flex items-center text-[16px] leading-[19px] font-medium  page-container h-full text-w px-2 gap-[7px] md:grid md:grid-cols-5 md:gap-[20px] md:justify-center md:py-[30px] "
      >
        <div className="flex  items-center justify-center">
          <Link
            to="/"
            className=" xl:border-r pr-[15px] hover:opacity-80 md:pr-0  relative navlink"
          >
            Offers
          </Link>
        </div>
        {listmenu.length > 0 &&
          listmenu.map((item) => (
            <div className="flex  items-center justify-center">
              <Link
                key={item.title}
                className="relative text-center navlink mx-[14.6px]"
                to="/"
              >
                {item.title}
              </Link>
            </div>
          ))}
        <div className="flex  items-center justify-center">
          <Link
            className="pl-[15px] hover:opacity-80 relative md:pl-0 text-center navlink "
            to="/"
          >
            Medical Devices & Equipments
          </Link>
        </div>
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
