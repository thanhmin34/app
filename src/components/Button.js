import React from "react";
import propTypes from "prop-types";
const Button = ({ children, props, tx, bg }) => {
  return (
    <button
      className={` flex items-center justify-center font-medium text-[18px] leading-[22px] ${tx} ${bg} h-[60px]`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string,
  tx: propTypes.string.isRequired,
  bg: propTypes.string.isRequired,
};
export default Button;
