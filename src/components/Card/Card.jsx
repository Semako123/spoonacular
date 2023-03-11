import React from "react";
import "./card.css";
import Button from "../Button/Button";

function Card({ children, img }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card__text">
        <p>{children}</p>
        <Button variant="outline">Discover</Button>
      </div>
    </div>
  );
}

export default Card;
