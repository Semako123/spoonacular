import React from "react";
import "./categories.css";
import { cake } from "../../assets/images";

const Categories = () => {
  return (
    <div className="category">
      <div className="category__section">
        <img src={cake} alt="" />
      </div>
      <div className="category__section">
        <img src={cake} alt="" />
      </div>
      <div className="category__section">
        <img src={cake} alt="" />
      </div>
      <div className="category__section">
        <img src={cake} alt="" />
      </div>
    </div>
  );
};

export default Categories;
