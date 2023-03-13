import "./cuisines.css";
import React from "react";
import { ACard } from "../../components";
import {
  african,
  american,
  british,
  cajun,
  caribbean,
  chinese,
  eastern_european,
  french,
  german,
  greek,
  indian,
  irish,
  italian,
  japanese,
  jewish,
  korean,
  latin_american,
  mediterranean,
  mexican,
  middle_eastern,
  nordic,
  southern,
  spanish,
  thai,
  vietnamese,
  european
} from "../../assets/images";

const Cuisines = () => {
  const data = [
    { name: "African", image: african },
    { name: "American", image: american },
    { name: "British", image: british },
    { name: "Cajun", image: cajun },
    { name: "Caribbean", image: caribbean },
    { name: "Chinese", image: chinese },
    { name: "Eastern European", image: eastern_european },
    { name: "European", image: european },
    { name: "French", image: french },
    { name: "German", image: german },
    { name: "Greek", image: greek },
    { name: "Indian", image: indian },
    { name: "Irish", image: irish },
    { name: "Italian", image: italian },
    { name: "Japanese", image: japanese },
    { name: "Jewish", image: jewish },
    { name: "Korean", image: korean },
    { name: "Latin American", image: latin_american },
    { name: "Mediterranean", image: mediterranean },
    { name: "Mexican", image: mexican },
    { name: "Middle Eastern", image: middle_eastern },
    { name: "Nordic", image: nordic },
    { name: "Southern", image: southern },
    { name: "Spanish", image: spanish },
    { name: "Thai", image: thai },
    { name: "Vietnamese", image: vietnamese },
  ];
  return (
    <div className="section__padding cuisines">
      <h3>EXPLORE OUR CUISINES</h3>
      <div className="cuisines__cards">
        {data.map((x, index) => (
          <ACard key={index} image={x.image}>
            {x.name}
          </ACard>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
