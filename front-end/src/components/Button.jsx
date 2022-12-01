import React from "react";
import "./Styles/Button.css";

const Button = ({ className, btnText, btnIcon, type }) => {
  return (
    <button className={className} type={type ? type : ""}>
      {btnIcon ? btnIcon : ""} {btnText}
    </button>
  );
};

export default Button;
