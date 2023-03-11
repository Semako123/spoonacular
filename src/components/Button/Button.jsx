import React from "react";
import "./button.css";

const Button = ({ children, variant, color }) => {
  return (
    <div className={`button ${variant} ${color}`}>
      {children}
    </div>
  );
};

export default Button;
