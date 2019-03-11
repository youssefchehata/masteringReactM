import React from "react";
import "./Bootstrap2.css";

import DateCalander from "./Date";
const Bootstrap2 = () => {
  return (
    <div className="container">
      <DateCalander />
      <h1 className="bg-dark text-white">h1.bg-dark.text-white</h1>
      <h1 className="bg-dark text-white d-none">
        h1.bg-dark.text-white.d-none
      </h1>
      <h1 className="bg-dark text-white d-inline">
        h1.bg-dark.text-white.d-inline
      </h1>

      <span className="bg-info text-white ">
        span.bg-info.text-white.d-inline
      </span>
      <span className="bg-info text-white d-block">
        span.bg-info.text-white.d-block
      </span>
      <h1 className="bg-dark text-white d-sm-none">
        h1.bg-dark.text-white.d-sm-block
      </h1>
      <h1 className="d-none d-sm-block">h1.d-none.d-sm-block'HIDDEN ON xs'</h1>
      <h1 className="d-none d-md-block">h1.d-none.d-md-block'HIDDEN ON md</h1>
    </div>
  );
};

export default Bootstrap2;
