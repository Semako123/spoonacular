import "./cuisines.css";
import React from "react";
import { ACard } from "../../components";
import { cuisine_data } from "../../data";
import { Link } from "react-router-dom";

const Cuisines = () => {
  
  return (
    <div className="section__padding cuisines">
      <h3 className="animate__animated animate__pulse" style={{animationIterationCount :"infinite"} }>EXPLORE OUR CUISINES</h3>
      <div className="cuisines__cards">
        {cuisine_data.map((x, index) => (
          <Link key={index} to={`/search/result?cuisine=${x.name}`}>
            <ACard image={x.image}>{x.name}</ACard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
