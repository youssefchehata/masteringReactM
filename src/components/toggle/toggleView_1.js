import React, { Component, Fragment } from 'react';

import ToggleOne from './toggleOne';
import Show_hide from './show_hide';
import Toggle from './toggleRenderProps';

import Search from './search';
class toggleView_1 extends Component {
  render() {
    return (
      <div className="container">
        <h1>toggleView_1</h1>
        <p>show/hide component reutilisable avec props_children</p>

        <Toggle>

             {({ on, toggle }) => (
            <div>
              <button onClick={toggle}>Show / Hide</button>
              {on && <ToggleOne  />}
            </div>
          )}
        </Toggle>
       
      
        {/* ------------------------------------------ */}
           <Show_hide> <div>hhhh</div> {/* <ToggleOne /> */} </Show_hide>
      </div>
    );
  }
}

export default toggleView_1;
