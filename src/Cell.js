import React from "react";

export default ({ isInitial, number, onClick }) => (
  <div
    onClick={isInitial ? null : onClick}
    className={`cell ${isInitial ? "initial" : ""}`}
  >
    {!!number && number}
  </div>
);
