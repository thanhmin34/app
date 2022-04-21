import React from "react";
import CartIcon from "./icon/CartIcon";
import SettingIcon from "./icon/SettingIcon";
import User from "./icon/User";
import Homeicon from "./svg/Homeicon";
import TelePhoneIcon from "./svg/TelePhoneIcon";
const HeaderMenu = () => {
  return (
    <div className="s1:hidden fixed bottom-0 left-0 right-0 box-shadow-xl bg-w h-[86px] py-[20px] grid grid-cols-5 z-[30]  ">
      <ListMenu title="Home" icon={<Homeicon />} Active={true} />
      <ListMenu title="Contact" icon={<TelePhoneIcon />} />
      <ListMenu title="Cart" icon={<CartIcon />} />
      <ListMenu title="Setting" icon={<SettingIcon />} />
      <ListMenu title="Account" icon={<User />} />
    </div>
  );
};

function ListMenu({ title = "Hello", icon, Active }) {
  return (
    <div
      className={`flex flex-col items-center justify-center   mt-[1px] ${
        Active === true ? "text-primary" : "hover:opacity-80"
      } cursor-pointer `}
    >
      <div className="flex w-[30px] items-center justify-center ">{icon}</div>
      <span className="text-xs font-[400] leading-[14.21px] mt-[5px]">
        {title}
      </span>
    </div>
  );
}
export default HeaderMenu;
