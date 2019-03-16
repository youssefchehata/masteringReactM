import React from "react";
const Grid = () => {
  return (
  <div className="container">
  <div className="row d-flex justify-content-start border">
  <div className="bg-success col-md-6 d-flex justify-content-end">col</div>
  <hr/>
  <div className="bg-warning col-md-4 d-flex justify-content-start">vol</div>
  <hr/>
  <div className="bg-danger col-md-4 d-flex justify-content-center">col</div>
  <hr/>
  <div className="bg-primary col-md-4 d-flex justify-content-end">col</div>
  <hr/>
  <div className="bg-info col-md-12 d-flex justify-content-end">col</div>
  </div>
 
  </div>
  );
};

export default Grid;
