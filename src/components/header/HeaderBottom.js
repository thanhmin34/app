import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const HeaderBottom = () => {
  const navRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    const hanldeScroll = () => {
      if (window.scrollY >= 112) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };
    document.addEventListener("scroll", hanldeScroll);
    return () => {
      document.removeEventListener("scroll", hanldeScroll);
    };
  }, []);

  return (
    <div
      className={`h-[50px] bg-primary w-full md:h-[170px] sm:hidden ${
        scrollTop === true
          ? "fixed top-0 left-0 right-0  z-30 transition-all duration-75"
          : ""
      }`}
    >
      <div
        ref={navRef}
        className={`flex items-center text-[16px] leading-[19px] font-medium  page-container h-full text-w px-2 gap-[7px] md:grid md:grid-cols-5 md:gap-[20px] md:justify-center md:py-[30px] `}
      >
        <div className="flex  items-center justify-center xl:border-r">
          <Link
            to="/calog"
            className="  mr-[15px] hover:opacity-80 md:pr-0  relative navlink"
          >
            Offers
          </Link>
        </div>
        {listmenu.length > 0 &&
          listmenu.map((item, index) => (
            <div key={index} className="flex  items-center justify-center">
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
            className="ml-[15px] hover:opacity-80 relative md:ml-0 text-center navlink "
            to="/contact"
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
