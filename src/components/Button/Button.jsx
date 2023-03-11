import React from "react";
import "./button.css";

const Button = ({ children, variant }) => {
  return (
    <div className={`button ${variant}`}>
      {children}
    </div>
  );
};

export default Button;
