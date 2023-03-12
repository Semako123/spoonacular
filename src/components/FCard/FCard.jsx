import "./FCard.css";
import React from "react";
import { Button } from "../";
import { timeP, love } from "../../assets/images";

const FCard = ({ title, cuisines, likes, time, image }) => {
  return (
    <div className="fcard">
      <img src={image} alt="" />
      <div className="fcard__content">
        <p>{cuisines.join(", ")}</p>
        <h3>{title}</h3>
        <div className="fcard__content-details">
          <img src={timeP} alt="" />
          {`${time} mins`}
        </div>
        <div className="fcard__content-details">
          <img src={love} alt="" />
          {`${likes} likes`}
              </div>
              <Button variant="curved" color="gold">Recipe Here!</Button>
      </div>
    </div>
  );
};

export default FCard;
