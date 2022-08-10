import React from "react";
import Personaje from "../Components/Personaje";
import { Alert } from "react-bootstrap";

export const PersonajePage = () => {
  return (
    <div>
      <br />
      <Alert variant="dark">
        <h1>El personaje del dia es:</h1>
      </Alert>

      <div className="container">
        <Personaje />
      </div>
    </div>
  );
};
