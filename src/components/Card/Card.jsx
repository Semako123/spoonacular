import React from "react";
import "./card.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Card({ children, img }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card__text">
        <p>{children} Cuisines</p>
        <Link to={`/search/result?cuisine=${children}`}>
          <Button variant="outline">Discover</Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
