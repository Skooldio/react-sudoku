import React from "react";

export default ({ isInitial, number }) => (
  <div className={`cell ${isInitial ? "initial" : ""}`}>{number}</div>
);
