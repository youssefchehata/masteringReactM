import React from "react";
const Grid = () => {
  return (
  <div classNameName="row">

  <div className="col-sm-2">
    <div className="callout callout-info b-t-1 b-r-1 b-b-1">
      <small className="text-muted">New Clients</small><hr/>
      <strong className="h4">9,123</strong>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="callout callout-danger b-t-1 b-r-1 b-b-1">
      <small className="text-muted">Recuring Clients</small><hr/>
      <strong className="h4">22,643</strong>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="callout callout-warning b-t-1 b-r-1 b-b-1">
      <small className="text-muted">Pageviews</small><hr/>
      <strong className="h4">78,623</strong>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="callout callout-success b-t-1 b-r-1 b-b-1">
      <small className="text-muted">Organic</small><hr/>
      <strong className="h4">49,123</strong>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="callout b-t-1 b-r-1 b-b-1">
      <small className="text-muted">CTR</small><hr/>
      <strong className="h4">23%</strong>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="callout callout-primary b-t-1 b-r-1 b-b-1">
      <small className="text-muted">Bounce Rate</small><hr/>
      <strong className="h4">5%</strong>
    </div>
  </div>
</div>
  );
};

export default Grid;
