import React from 'react';
import './1.css';
import './2.css';
import './3.css';

import logo from './logo.svg';
const CssOne = () => {
    return ( 
        <div className="container">
        css1
        <div className="vibrate-1">
        <img src={logo} alt="one" />
        </div>
        <div className="flip-scale-up-hor">
        <img src={logo} alt="one" />
        </div>
        <div className="rotate-scale-up">
        <img src={logo} alt="one" />
        </div>
        </div>
     );
}
 
export default CssOne;





// http://animista.net/play/basic/rotate-scale