import React from 'react';
import './1.css';
import './2.css';
import './3.css';
import logo from './logo.svg';
const CssOne = () => {
    return ( 
        <div className="container">
        <div className="row">
           <div className="vibrate-1 col-md-4">
        <img src={logo} alt="one" />
        </div>
        <div className="flip-scale-up-hor col-md-4">
        <img src={logo} alt="one" />
        </div>
        <div className="rotate-scale-up col-md-4">
        <img src={logo} alt="one" />
        </div>
        </div>
        css1
      {/* <div className="logo width: 50px; height: 50px"  style={{backgroundImage: `url(${comingsoon}` }}><h1>"Coming..."</h1></div> */}
        </div>
     );
}
 
export default CssOne;





// http://animista.net/play/basic/rotate-scale