import React from "react";
import "./Styles/Button.css";

const Button = ({ className, btnText, btnIcon, type, click }) => {
  return (
    <button className={className} type={type ? type : ""} onClick={click}>
      {btnIcon ? btnIcon : ""} {btnText}
    </button>
  );
};

export default Button;
