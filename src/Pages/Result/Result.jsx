import "./result.css";
import React from "react";
import API, { params } from "../../API";
import { useEffect, useState, useMemo } from "react";
import { BCard } from "../../components";
import { Loading } from "../../containers";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const query = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = {};
    for (let param of searchParams.entries()) {
      params[param[0]] = param[1];
    }
    return params;
  }, [location.search]);

  useEffect(() => {
    API.get("/recipes/complexSearch", { params: { ...params, ...query } }).then(
      (res) => {
        setLoading(false);
        setData(res.data.results);
      }
    );
  }, [query]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="result section__padding">
      {data.map((x, index) => (
        <BCard key={index} image={x.image} title={x.title} index={index} />
      ))}
    </div>
  );
};

export default Result;
