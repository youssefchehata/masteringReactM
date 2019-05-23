import React from 'react';
import bg from './bg.svg';
let background = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: ' bottom ',
  backgroundSize: '100%',
  position: 'relative',
  zIndex: '1',
//   margin:'10px'
};
const Test2 = () => {
  return (
    <div className="container-fluid " style={background}>
      <div className="row " style={{ height: '87vh',zIndex: '2' ,
    }}>
        <div className="col-6">test1</div>
        <div className="col-6">test2</div>
      </div>

      {/* <div style={{ backgroundImage: `url(require("/bg.svg"))` }}>
          jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
      </div> */}
    </div>
  );
};

export default Test2;
