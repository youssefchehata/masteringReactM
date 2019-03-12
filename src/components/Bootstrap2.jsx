import React from 'react';
// import './Bootstrap2.css';
// import DateCalander from './DateCalander';
const Bootstrap2 = () => {
  return (
    <div className="container">
      {/* <DateCalander /> */}
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
      <hr />
      <span className="d-inline d-sm-none">XS</span>
      <span className="d-none">SM</span>
      <span className="d-none">MD</span>
      <span className="d-none">LG</span>
      <span className="d-none">XL</span>
      <h1 className="bg-danger text-black d-sm-none">back-ground</h1>
      <hr />
      <span class="border">span.border</span>
      <span class="border border-primary border-top-0">
        span.border-primary
      </span>
      <span class="border-top" />
      <span class="border-right" />
      <span class="border-bottom" />
      <span class="border-left" />
      {/* <img src="..." alt="..." class="rounded">
<img src="..." alt="..." class="rounded-top">
<img src="..." alt="..." class="rounded-right">
<img src="..." alt="..." class="rounded-bottom">
<img src="..." alt="..." class="rounded-left">
<img src="..." alt="..." class="rounded-circle">
<img src="..." alt="..." class="rounded-pill">
<img src="..." alt="..." class="rounded-0"></img> */}
      <span className="border border-success rounded">
        span.border.border-succecc.rounded
      </span>
      <span className="border border-success rounded-circle">
        span.border.border-succecc.rounded-circle
      </span>
<hr/>
<span className="shadow-sm">hhh</span>
<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
    </div>
  );
};

export default Bootstrap2;
