import React from 'react';
import './postion.css';

const Test1 = () => {
    return  <div
    className="container"
    //   style={{    backgroundColor: 'transparent', width: '100%',height:'79vh' }}
  >
    <div className="row">
      <div
        className="columns position-relative col-sm-4"
        style={{ backgroundColor: 'aliceblue', width: '100%' }}
      >
        First
        <div className="container 50 bg-info position-absolute"style={{top: '419%',
  height: "100px"}}>
          <div className="row  d-flex align-items-center flex-column">
            <div className=" col-sm-6">50</div>
            <div className="col-sm-6">50</div>
          </div>
        </div>
      </div>
      <div className="columns col-sm-4">Second</div>
      <div
        className="columns col-sm-4 third"
        style={{ backgroundColor: 'chartreuse', width: '100%' }}
      >
        Third
        {/* <div className="container test bg-warning ">
          <div className="row">
            <div className="col-sm-4">Test1</div>
            <div className="col-sm-4">Test2</div>
            <div className="col-sm-4" style={{ height: '113px' }}>
              Test3
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
}
 
export default Test1;