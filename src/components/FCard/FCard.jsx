import "./FCard.css";
import React from "react";
import { Button } from "../";
import { timeP, love } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const FCard = ({ title, cuisines, likes, time, image, id }) => {
  const navigate = useNavigate();
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
        <Button
          variant="curved"
          color="gold"
          onClick={() => {
            navigate(`/recipe/${id}`);
          }}
        >
          Recipe Here!
        </Button>
      </div>
    </div>
  );
};

export default FCard;
