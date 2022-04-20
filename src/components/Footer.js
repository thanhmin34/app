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
      <div className="mt-[100px] bg-primary w-full h-[317px] px-2">
        <div className="page-container grid grid-cols-4 gap-5">
          <FooterName title="Who is ORANGE" data={orange} />
          <div className="flex flex-col text-w mt-[50px]">
            <h2 className="text-[18px] leading-[22px] font-medium mb-5">
              Contact us
            </h2>
            {contact.length > 0 &&
              contact.map((item) => (
                <div
                  key={item.content}
                  className="flex items-center justify-start mb-[15px]"
                >
                  <span className="mr-[12px]">{item.icon}</span>
                  <span>{item.content}</span>
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
    <div className="flex flex-col mt-[50px] text-w">
      <h2 className="text-[18px] leading-[22px] font-medium mb-5">{title}</h2>
      {data.length > 0 &&
        data.map((item, index) => (
          <span className="font-[400] leading-[19px] mb-[15px]" key={index}>
            {item}
          </span>
        ))}
    </div>
  );
}
export default Footer;
