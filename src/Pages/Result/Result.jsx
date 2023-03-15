import "./result.css";
import React from "react";
import { useSearchParams } from "react-router-dom";
import API, { params } from "../../API";
import { useEffect, useState } from "react";
import { BCard } from "../../components";
import { Loading } from "../../containers";

const Result = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let query = {};

  useEffect(() => {
    API.get("/recipes/complexSearch", { params: { ...params, ...query } }).then(
      (res) => {
        setLoading(false);
        setData(res.data.results);
      }
    );
  }, [query]);
  const [searchParams, setParams] = useSearchParams();
  const param = searchParams.entries();
  for (const i of param) {
    query[i[0]] = i[1];
  }

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
