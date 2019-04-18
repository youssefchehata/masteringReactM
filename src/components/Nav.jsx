import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <Link className="navbar-brand" to="/"> Navbar </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">

          {/* Table */}
            <div class="btn-group">
              <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > Table </button>
              <div class="dropdown-menu">
                < Link className="dropdown-item" to="/table_sort/table_sort"    > table_sort   </Link >
                < Link className="dropdown-item" to="/javascript"               > javascript   </Link >
                < Link className="dropdown-item" to="/modal/modal1/modal_view"  > Modal_view_1 </Link >
                < Link className="dropdown-item" to="/modal/modal2/modal_view2" > Modal_view_2 </Link >
                < Link className="dropdown-item" to="/navs/navsViews"           > navsView     </Link >
                < Link className="dropdown-item" to="/toggle/toggleView_1"      > toggleView_1 </Link >
              </div>
            </div>
            {/* Bootstrap */}
            <div class="btn-group">
              <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > Bootstrap </button>
            <div class="dropdown-menu">
               
             <Link className="dropdown-item" to="/input"      > Inputs     </Link>
             <Link className="dropdown-item" to="/bootstrap"  > Bootstrap  </Link>
             <Link className="dropdown-item" to="/bootstrap2" > Bootstrap2 </Link>
             <Link className="dropdown-item" to="/grid"       > Grid       </Link>
             <Link className="dropdown-item" to="/card"       > Card       </Link>
             <Link className="dropdown-item" to="/flex"       > Flex       </Link>
             <div role="separator" className="dropdown-divider" />
             <Link className="dropdown-item" to="/css/cssOne/1" > Css    </Link>
             <Link className="dropdown-item" to="/divers"       > Divers </Link> 

            </div>
            </div>

            <li className="nav-item active"> <Link className="nav-link" to="/table/showtable"> Table <span className="sr-only">(current)</span> </Link> </li>
            <li className="nav-item"> <Link className="nav-link" to="/app"       > Movies     </Link> </li>
            <li className="nav-item"> <Link className="nav-link" to="/customers" > Customers  </Link> </li>
          
            <div class="btn-group">
              <button
                type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                dropdown
              </button>
              <div class="dropdown-menu">
               
                <Link className="dropdown-item" to="/axios/axios"                   > axios          </Link>
                <Link className="dropdown-item" to="/axiosMosh/axiosMosh"           > AxiosMosh      </Link>
                <Link className="dropdown-item" to="/props_children/props_children" > props_children </Link>

               

              </div>
              
            </div>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className=" btn btn-secondary my-2 my-sm-0" type="submit"> Search </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
