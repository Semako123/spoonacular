import "./notfound.css";
import React from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import "animate.css"

const NotFound = () => {
  return (
    <div className="notfound">
      <h3 className="animate__animated animate__zoomIn">404</h3>
      <p className="animate__animated animate__zoomIn">
        Ooops, this page does not exist
      </p>
      <Link to="/" className="animate__animated animate__zoomIn">
        <Button variant="rounded" color="gold">
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
