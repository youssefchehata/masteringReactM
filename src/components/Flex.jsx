import React from "react";
const Flex = () => {
  return (
    <div className="container">
      <h1 className="text-center">Flex Demo</h1>
      <h1 className="text-center">d-flex flex-column</h1>
      <div className="d-flex flex-column">
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
      {/* ----------------------------- */}
      <h1 className="text-center">d-flex justify-content-end</h1>
      <div className="d-flex justify-content-end">
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
      {/* ----------------------- */}
      <h1 className="text-center">d-flex justify-content-center</h1>
      <div className="d-flex justify-content-center">
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
      {/* ------------------------------------ */}
      <h1 className="text-center">d-flex justify-content-between</h1>
      <div className="d-flex justify-content-between">
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
      {/* ----------------------------------- */}
      <h1 className="text-center">d-flex justify-content-around</h1>
      <div className="d-flex justify-content-around">
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
      {/* --------------------------------- */}
      <h1 className="text-center">d-flex justify-content-stretch</h1>
      <div className="d-flex justify-content-stretch">
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
      {/* --------------------------- */}
      <h1 className="text-center">d-flex flex-row-reverse</h1>
      <div className="d-flex flex-row-reverse">
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
      {/* --------------------------- */}
      <h1 className="text-center">
        "d-flex justify-content-center border "style=height:300
      </h1>
      <div
        className="d-flex justify-content-center border "
        style={{ height: 200 }}
      >
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
      {/* --------------------------- */}
      <h1 className="text-center">
        "d-flex  align-items-center border "style=height:200
      </h1>
      <div className="d-flex  align-items-center border " style={{ height: 200 }}>
        <button className="btn-lg btn-danger">Button 1</button>
        <button className="btn-lg btn-warning">Button 2</button>
        <button className="btn-lg btn-success">Button 3</button>
        <button className="btn-lg btn-info">Button 4</button>
      </div>
    </div>
  );
};

export default Flex;
