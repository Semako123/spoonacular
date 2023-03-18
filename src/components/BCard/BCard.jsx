import "./bcard.css";
import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const BCard = ({ title, image, index, id }) => {
  const navigate = useNavigate();
  const hover = (e) => {
    console.log(e);
    const image = document.querySelectorAll(".bcard img");
    image[index].style.transform = "rotate(0deg) translate(0px, -25px)";
  };

  const unhover = () => {
    const image = document.querySelectorAll(".bcard img");
    image[index].style.transform = "rotate(10deg) translate(-15px, -45px)";
  };
  return (
    <div className="bcard" onMouseOver={hover} onMouseOut={unhover}>
      <div className="bcard__image">
        <img src={image} alt="" />
      </div>
      <h5>{title}</h5>
      <Button
        variant="curved"
        color="gold"
        onClick={() => {
          navigate(`/recipe/${id}`);
        }}
      >
        Recipe
      </Button>
    </div>
  );
};

export default BCard;
