import React, { Component, Fragment } from 'react';
import Toggle from './toggleRenderProps'
import Modal from './modal'
class Level_2_React extends Component {
  state = {}
  render() {
    return (
      <Toggle>

        {({ on, toggle }) => (
          <Fragment>
            <button className="btn-warning " onClick={toggle}>login</button>

            <Modal on={on} toggle={toggle} >

              <div class="card-header"> Featured </div>

              <div className="container-fluid" >

                <div className="row">
                  <div className="col">
                    <form submitted={this.state.submitted}>
                      <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input type="text" className="form-control" name="label" />
                      </div>
                    </form>


                  </div>
                  
                </div>
                <hr/>   
                <button type="button" class="btn btn-primary mr-2">Save changes</button>
              </div>
            </Modal>
          </Fragment>
        )}
      </Toggle>);
  }
}

export default Level_2_React;