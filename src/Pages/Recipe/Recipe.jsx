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
  if (loading) {
    return <Loading />;
  }
  return <div>Recipe</div>;
}

export default Recipe;
