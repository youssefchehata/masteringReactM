import React, { Component ,Fragment} from 'react';
import Toggle from './toggleRenderProps'
import Modal from './modal'
class Level_2_React extends Component {
    state = {  }
    render() { 
        return ( 
            <Toggle>

            {({ on, toggle }) => (
           <Fragment>
               <button className="btn-warning " onClick={toggle}>login</button>

             <Modal on={on} toggle={toggle} >
                 childrenhhhhhhhhhhhhhhhhh
                 jhhhhhhhhhhh$
                 jojooooooooo modal
              </Modal>
           </Fragment>
         )}
       </Toggle> );
    }
}
 
export default Level_2_React;