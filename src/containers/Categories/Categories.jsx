import React from "react";
import "./categories.css";
import { cake, bread, dessert, pie } from "../../assets/images";

const Categories = () => {
  const cat = [
    {
      name: "Cake",
      img: cake,
    },
    {
      name: "Bread",
      img: bread,
    },
    {
      name: "Pie",
      img: pie,
    },
    {
      name: "Dessert",
      img: dessert,
    },
  ];

  const expand = (index) => {
    const catSel = document.querySelectorAll(".category__section");
    const cat_imgSel = document.querySelectorAll(".category__section img");
    catSel[index].style.width = "600px";
    cat_imgSel[index].style.transform = "translateX(0px)";
  };

  const retract = (index) => {
    const catSel = document.querySelectorAll(".category__section");
    const cat_imgSel = document.querySelectorAll(".category__section img");
    catSel[index].style.width = "auto";
    cat_imgSel[index].style.transform = "translateX(-50%)";
  };

  return (
    <div className="category">
      {cat.map((x, index) => (
        <div
          className="category__section"
          onMouseOver={() => {
            expand(index);
          }}
          onMouseOut={() => {
            retract(index);
          }}
          key={x.name}
        >
          <img src={x.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Categories;
