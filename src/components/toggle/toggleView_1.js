import React, { Component, Fragment } from 'react';

import ToggleOne from './toggleOne';
import Show_hide from './show_hide';
import Toggle from './toggleRenderProps';

import Search from './search';
class toggleView_1 extends Component {
  state = {
    on: false
  };
  render() {
    return (
      <div className="container">
        <h1>toggleView_1</h1>
        <p>show/hide component reutilisable avec props_children</p>

        <Toggle
          render={({ on, toggle }) => (
            <div>
              <button onClick={toggle}>Show / Hide</button>
              {on && <h1>Show Me</h1>}
            </div>
          )}
        />
        {/* ------------------------------------------ */}
        <Show_hide>
          <Fragment>
            <ToggleOne />
          </Fragment>
        </Show_hide>
      </div>
    );
  }
}

export default toggleView_1;
