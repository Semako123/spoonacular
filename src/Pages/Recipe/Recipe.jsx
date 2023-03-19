import "./recipe.css";
import React from "react";
import { useParams } from "react-router-dom";
import API, { params } from "../../API";
import { useEffect, useState } from "react";
import { Loading } from "../../containers";

function Recipe() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    API.get(`/recipes/${id}/information`, { params: { ...params } }).then(
      (res) => {
        setData(res.data);
        setLoading(false);
      }
    );
  }, [id]);
  useEffect(() => {
    API.get(`/recipes/${id}/ingredientWidget`, {
      params: { ...params },
    }).then((res) => {
      const widget = document.querySelector(".recipe__ingredientWidget");
      widget.innerHTML = res.data;
      const summary = document.querySelector(".recipe__summary");
      summary.innerHTML = data.summary;
    });
  }, [data, id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="recipe section__padding">
      <div className="recipe__heading">
        <h3>{data.title}</h3>
        <img src={data.image} alt="" />
      </div>
      <p className="recipe__summary"></p>
      <div className="recipe__body">
        <div className="recipe__info">
          <div>
            <p>Servings: {data.servings}</p>
          </div>
          <div>
            <p>Ready in: {data.readyInMinutes} minutes</p>
          </div>
          <div>
            <p>Health Score: {data.healthScore}</p>
          </div>
          <div>
            <p>Price per Serving: ${data.pricePerServing}</p>
          </div>
          {data.diets && data.diets.map((x, index) => x)}
          <p>Dish Type: {data.dishTypes.map((x, index) => x)}</p>
        </div>
      </div>
      <div className="recipe__instructions">
        <h5>Instructions</h5>
        <p>
          See detailed Instructions at {" "}
          <a href={data.sourceUrl} target="_blank" rel="noreferrer">
            {data.sourceName}
          </a>
        </p>
      </div>
      {data.winePairing && (
        <div className="recipe__wines">
          <h3>Wine Pairing</h3>
          <p>
            {data.winePairing.pairingText
              ? data.winePairing.pairingText
              : "None"}
          </p>
          {data.winePairing.productMatches && (
            <div>{data.winePairing.productMatches.map((x, index) => x.id)}</div>
          )}
        </div>
      )}
      <div className="recipe__ingredients">
        <h3>Ingredients</h3>
        <div className="recipe__ingredientWidget"></div>
      </div>
    </div>
  );
}

export default Recipe;
