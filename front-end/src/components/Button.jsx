import React from "react";
import "./Styles/Button.css";

const Button = ({ className, btnText, btnIcon }) => {
  return (
    <button className={className}>
      {btnIcon ? btnIcon : ""} {btnText}
    </button>
  );
};

export default Button;
