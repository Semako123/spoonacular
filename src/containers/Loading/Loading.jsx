import "./loading.css";
import { loading } from "../../assets/images";

import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
