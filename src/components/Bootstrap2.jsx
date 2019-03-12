import React from "react";
// import './Bootstrap2.css';
import DateCalander from "./DateCalander";
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
      <hr />
      <span className="shadow-sm">hhh</span>
      <div class="shadow-none p-3 mb-5 bg-light rounded">
        No shadow_shadow-none p-3 mb-5 bg-light rounded
      </div>
      <div class="shadow-sm p-3 mb-5 bg-white rounded">
        Small shadow_shadow-sm p-3 mb-5 bg-white rounded
      </div>
      <div class="shadow p-3 mb-5 bg-white rounded">
        Regular shadow_shadow p-3 mb-5 bg-white rounded
      </div>
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        Larger shadow_shadow-lg p-3 mb-5 bg-white rounded
      </div>
      <hr />
      <p>
      <h2 className="bg-info text-black">
      0 - for classes that eliminate the margin or padding by setting it to 0
        </h2>
        <h2 className="bg-info text-black">
          t - for classes that set margin-top or padding-top
        </h2>
        <h2 className="bg-info text-black">
          b - for classes that set margin-bottom or padding-bottom
        </h2>
        <h2 className="bg-info text-black">
          l - for classes that set margin-left or padding-left
        </h2>
        <h2 className="bg-info text-black">
          r - for classes that set margin-right or padding-right
        </h2>
        <h2 className="bg-info text-black">
          x - for classes that set both *-left and *-right
        </h2>
        <h2 className="bg-info text-black">
          y - for classes that set both *-top and *-bottom
        </h2>
      </p>
      <h1>Padding Utility</h1>
      <p className="p-0 bg-success d-inline-block">p-0</p>
      <p className="p-1 bg-success d-inline-block">p-1</p>
      <p className="p-2 bg-success d-inline-block">p-2</p>
      <p className="p-3 bg-success d-inline-block">p-3</p>
      <p className="p-4 bg-success d-inline-block">p-4</p>
      <hr/>
      <button className="btn-warning pt-5">btn.btn-warning.pt-5</button>
      <button className="btn-warning pb-5">btn.btn-warning.pb-5</button>
      <button className="btn-warning pr-5">btn.btn-warning.pr-5</button>
      <button className="btn-warning pl-5">btn.btn-warning.pl-5</button>
      <button className="btn-warning px-5">btn.btn-warning.px-5</button>
      <button className="btn-warning py-5">btn.btn-warning.py-5</button>
      <h1>Margin Utility</h1>
      <h1 className="m-0 bg-success d-inline-block">h1.m-0.bg-success.d-inline-block</h1>
      <h1 className="m-1 bg-success d-inline-block">h1.m-0.bg-success.d-inline-block</h1>
      <h1 className="m-2 bg-success d-inline-block">h1.m-0.bg-success.d-inline-block</h1>
      <h1 className="m-3 bg-success d-inline-block">h1.m-0.bg-success.d-inline-block</h1>
      <h1 className="m-4 bg-success d-inline-block">h1.m-0.bg-success.d-inline-block</h1>
      <hr/>
      <p className="m-2  bg-danger d-inline-block">with</p>
      <p className="m-2  bg-danger d-inline-block">with</p>
      <p className="m-2  bg-danger d-inline-block">with</p>
      <p className="m-2  bg-danger d-inline-block">with</p>
      <p className="m-2  bg-danger d-inline-block">with</p>
      <div className="d-inline-block bg-success" style={{width: 201,height:200}}>Height 200%</div>
      
    </div>
  );
};

export default Bootstrap2;
