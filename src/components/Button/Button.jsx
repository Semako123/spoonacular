import React from "react";
import "./button.css";

const Button = ({ children, variant, color, onClick }) => {
  return (
    <div className={`button ${variant} ${color}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
