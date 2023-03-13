import "./result.css";
import React from "react";
import { useSearchParams } from "react-router-dom";
import API, { params } from "../../API";
import { useEffect, useState } from "react";
import { ACard } from "../../components";
import { Loading } from "../../containers";

const Result = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    API.get("/recipes/complexSearch", { params: { ...params, ...query } }).then(
      (res) => {
        setLoading(false);
        setData(res.data.results);
      }
    );
  }, []);
  let query = {};
  const [searchParams, setParams] = useSearchParams();
  const param = searchParams.entries();
  for (const i of param) {
    query[i[0]] = i[1];
    console.log(i);
  }

  if (isLoading) {
    return (
      <Loading/>
    );
  }
  return (
    <div className="section__padding">
      {data.map((x, index) => (
        <ACard key={index} image={x.image}>
          {x.title}
        </ACard>
      ))}
    </div>
  );
};

export default Result;
