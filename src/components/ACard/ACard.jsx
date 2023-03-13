import React from "react";
import "./acard.css";

const ACard = ({ children, image }) => {
  return (
    <div className="acard">
      <div>
        <img src={image} alt="" />
      </div>
      <p>{children}</p>
    </div>
  );
};

export default ACard;
