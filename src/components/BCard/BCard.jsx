import "./bcard.css";
import React from "react";

const BCard = ({ title, image }) => {
  const hover = () => {
    const image = document.querySelectorAll(".bcard img");
    image.forEach((x) => {
      x.style.transform = "rotate(0deg) translate(0px, -25px)";
    });
  };

  const unhover = () => {
    const image = document.querySelectorAll(".bcard img");
    image.forEach((x) => {
      x.style.transform = "rotate(10deg) translate(-15px, -45px)";
    });
  };
  return (
    <div className="bcard" onMouseOver={hover} onMouseOut={unhover}>
      <div className="bcard__image">
        <img src={image} alt="" />
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default BCard;
