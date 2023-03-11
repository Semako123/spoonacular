import React from "react";
import "./categories.css";
import { useState } from "react";
import { cake, bread, dessert, pie } from "../../assets/images";
import { Button } from "../../components";

const Categories = () => {
  const cat = [
    {
      name: "Cake",
      img: cake,
      color: "pink",
      text: "Bake like a pro with our easy-to-follow cake recipes",
      subtext:
        "From Simple to Sophisticated : Delve into our Cake Recipes and Create Mouthwatering Treats for any Occasion.",
    },
    {
      name: "Bread",
      img: bread,
      color: "brown",
      text: "Bake your way to delicious fresh bread with our recipe",
      subtext:
        "From Classic to Artisanal : Explore our Bread Recipes and Elevate your Baking Game.",
    },
    {
      name: "Pies",
      img: pie,
      color: "purple",
      text: "Satisfy your sweet and savoury cravings with our delicious pie",
      subtext: "From Sweet to Savoury : Discover our Pie Recipes",
    },
    {
      name: "Dessert",
      img: dessert,
      color: "blue",
      text: "Life is short, eat desert first with our delicious homemade recipes",
      subtext:
        "From Indulgent to Guilt-free : Treat Yourself to our Collection of Dessert Recipes that are Sure to Satisfy any Sweet Tooth.",
    },
  ];

  const [expanded, setExpanded] = useState([false, false, false, false]);
  const expand = (index) => {
    const catSel = document.querySelectorAll(".category__section");
    const cat_imgSel = document.querySelectorAll(".category__section img");
    catSel[index].style.width = "600px";
    cat_imgSel[index].style.transform = "translateX(0px)";
    setExpanded((expanded) => {
      const temp = [...expanded];
      temp[index] = true;
      return temp;
    });
  };

  const retract = (index) => {
    const catSel = document.querySelectorAll(".category__section");
    const cat_imgSel = document.querySelectorAll(".category__section img");
    catSel[index].style.width = "auto";
    cat_imgSel[index].style.transform = "translateX(-50%)";
    setExpanded((expanded) => {
      const temp = [...expanded];
      temp[index] = false;
      return temp;
    });
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
          <div className="category__section-content">
            <h4>{x.name}</h4>
            {expanded[index] && (
              <>
                <p>{x.text}</p>
                <p id="subtext">{x.subtext}</p>
                <Button variant="curved" color={x.color}>
                  Discover
                </Button>
              </>
            )}
          </div>
          <img src={x.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Categories;
