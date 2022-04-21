import React from "react";
import { Link } from "react-router-dom";
import CarIcon from "./icon/CarIcon";
import EmailIcon from "./icon/EmailIcon";
import Facebook from "./icon/Facebook";
import Istag from "./icon/Istag";
import PhoneIcon from "./icon/PhoneIcon";
import Twiter from "./icon/Twiter";
import Watch from "./icon/Watch";
import AppStore from "./svg/AppStore";
import GgPlay from "./svg/GgPlay";

const Footer = () => {
  return (
    <>
      <div className="mt-[100px] sm:mt-[24px] bg-[#ff841d] w-full h-[317px] sm:h-[274px] px-2 text-w sm:py-5">
        <div className="sm:flex flex-col hidden">
          <h2 className="text-center text-[20px] font-medium">
            Subscribe For Our Newsletters
          </h2>
          <div className="flex px-[15px] mt-5 text-w items-center justify-center">
            <input
              type="text"
              placeholder="Type you gmail "
              className=" input-border text-[16px] bg-[#ff841d] px-4  py-[7px] w-full max-w-[184px] mr-[10px] "
            />
            <button className="text-sm text-[#ff841d] bg-w  w-full max-w-[140px] py-[10px]">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-3 justify-center mt-5">
            <Link to="/" className="w-7">
              <img
                src="https://pwa-orange.snaptec.co/facebook-jZM.png"
                alt=""
              />
            </Link>
            <Link to="/" className="w-7">
              <img src="	https://pwa-orange.snaptec.co/twitter-6cW.png" alt="" />
            </Link>
            <Link to="/" className="w-7">
              <img
                src="https://pwa-orange.snaptec.co/instagram-qnN.png"
                alt=""
              />
            </Link>
            <Link to="/" className="w-7">
              <img
                src="	https://pwa-orange.snaptec.co/whatsapp-2yp.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="page-container grid grid-cols-4 gap-5 sm:hidden">
          <FooterName title="Who is ORANGE" data={orange} />
          <div className="flex flex-col text-w mt-[50px]">
            <h2 className="text-[18px] leading-[22px] font-medium mb-5 text-center ">
              Contact us
            </h2>
            {contact.length > 0 &&
              contact.map((item) => (
                <div
                  key={item.content}
                  className="flex items-center justify-start mb-[15px]"
                >
                  <span className="mr-[12px]">{item.icon}</span>
                  <span className="text-base md:text-sm">{item.content}</span>
                </div>
              ))}
            <div className="flex  items-center justify-start mb-[15px]">
              <span className="text-[14px]">
                <CarIcon />
              </span>
              <div className="ml-[12px] flex flex-col ">
                <span>Free Shipping</span>
                <span className="text-[8px] font-[400] leading-[10px] pl-1">
                  Free in Riyadh
                </span>
              </div>
            </div>
            <div className="social  flex items-center mt-5 justify-start">
              {social.length > 0 &&
                social.map((item, index) => (
                  <Link to="/" key={index} className="mr-[20px]">
                    {item.icon}
                  </Link>
                ))}
            </div>
          </div>
          <FooterName title="Orange conditions & guarantees" data={orange2} />
          <div className="flex flex-col text-w mt-[50px]">
            <h2 className="text-[18px] leading-[22px] font-medium mb-5">
              Get the APP
            </h2>
            <div className="flex flex-col">
              <Link to="/" className="mb-[10px]">
                <AppStore />
              </Link>
              <Link to="/">
                {" "}
                <GgPlay />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const contact = [
  {
    icon: <PhoneIcon />,
    content: "920006277",
  },
  {
    icon: <EmailIcon />,
    content: "info@orangepharmacy.sa",
  },
];
const orange = ["Pharmachies Group", "Vision", "Mission", "Servise points"];
const orange2 = [
  "Terms & Condition",
  "Privacy & Security",
  "Terms of sale",
  "Shipping & Returns",
];
const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twiter />,
  },
  {
    icon: <Istag />,
  },
  {
    icon: <Watch />,
  },
];
function FooterName({ title, data }) {
  return (
    <div className="flex flex-col mt-[50px] text-w ">
      <h2 className="text-[18px] leading-[22px] font-medium mb-5 md:text-base">
        {title}
      </h2>
      {data.length > 0 &&
        data.map((item, index) => (
          <span
            className="font-[400] leading-[19px] mb-[15px] text-base"
            key={index}
          >
            {item}
          </span>
        ))}
    </div>
  );
}
export default Footer;
