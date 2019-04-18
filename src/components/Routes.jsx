import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "../App.js";
import Rentals from "./Input";
import Customers from "./customers";
import Not_found from "./not_found";
import Bootstrap from "./Bootstrap";
import Bootstrap2 from "./Bootstrap2";
import Divers from "./divers";
import Grid from "./Grid";
import Card from "./Card";
import Flex from "./Flex";
import CssOne from "./Css/cssOne/1";
import Axios from "./axios/Axios";
import AxiosMosh from "./axiosMosh/AxiosMosh";
import Inputfile from "./inputfile";
import props_children from "./props_children/props_children";
import Table_sort from "./table_sort/table_sort";
import Javascript from "./javascript";
import Modal_view from "./modal/modal1/modal_view";
import Modal_view2 from "./modal/modal2/modal_view2";
import NavsViews from "./navs/navsViews";

import ShowTable from "./table/showtable";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/app"                           component={App           } />
          <Route exact path="/input"                         component={Rentals       } />
          <Route exact path="/customers"                     component={Customers     } />
          <Route exact path="/not_found"                     component={Not_found     } />
          <Route exact path="/bootstrap"                     component={Bootstrap     } />
          <Route exact path="/bootstrap2"                    component={Bootstrap2    } />
          <Route exact path="/grid"                          component={Grid          } />
          <Route exact path="/card"                          component={Card          } />
          <Route exact path="/flex"                          component={Flex          } />
          <Route exact path="/divers"                        component={Divers        } />
          <Route exact path="/Css/cssOne/1"                  component={CssOne        } />
          <Route exact path="/axios/Axios"                   component={Axios         } />
          <Route exact path="/axiosMosh/AxiosMosh"           component={AxiosMosh     } />
          <Route exact path="/props_children/props_children" component={props_children} />
          <Route exact path="/inputfile/inputfile"           component={Inputfile     } />
          <Route exact path="/table/showtable"               component={ShowTable     } />
          <Route exact path="/table_sort/table_sort"         component={Table_sort    } />
          <Route exact path="/javascript"                    component={Javascript    } />
          <Route exact path="/modal/modal1/modal_view"       component={Modal_view    } />
          <Route exact path="/modal/modal2/modal_view2"      component={Modal_view2   } />
          <Route exact path="/navs/navsViews"                component={NavsViews     } />
          <Route exact path="/"                              component={App           } />
          {/* <Route path="/movies/:id" component={Movie} /> */}
          <Redirect to="/not_found" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
