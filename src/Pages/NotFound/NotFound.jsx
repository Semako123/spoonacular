import "./notfound.css";
import React from "react";
import { Button } from "../../components";

const NotFound = () => {
  return (
    <div className="notfound">
      <h3>
        404
      </h3>
      <p>Ooops, this page does not exist</p>
      <Button variant="rounded" color="gold">Back to Homepage</Button>
    </div>
  );
};

export default NotFound;
