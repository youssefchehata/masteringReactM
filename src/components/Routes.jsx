import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App            from "../App.js"                                     ;
import Rentals        from "./Input"                                       ;
import Customers      from "./customers"                                   ;
import Not_found      from "./not_found"                                   ;
import Bootstrap      from "./Bootstrap"                                   ;
import Bootstrap2     from "./Bootstrap2"                                  ;
import Divers         from "./divers"                                      ;
import Grid           from "./Grid"                                        ;
import Card           from "./Card"                                        ;
import Flex           from "./Flex"                                        ;
import CssOne         from "./Css/cssOne/1"                                ;
import Axios          from "./axios/Axios"                                 ;
import AxiosMosh      from "./axiosMosh/AxiosMosh"                         ;
import Inputfile      from "./inputfile"                                   ;
import props_children from "./props_children/props_children"               ;
import Table_sort     from "./table_sort/table_sort"                       ;
import Javascript     from "./javascript"                                  ;
import Modal_view     from "./modal/modal1/modal_view"                     ;
import Modal_view2    from "./modal/modal2/modal_view2"                    ;
import NavsViews      from "./navs/navsViews"                              ;
import toggleView_1   from "./toggle/toggleView_1"                         ;
import CheckBoxView   from "./checkBox/CheckBoxView"                       ;
import SemanticUi     from "./semantic-ui/SemanticUi"                      ;
import ShowTable      from "./table/showtable"                             ;
import ContextApi     from "./contextAPI/ContextApi"                       ;
import Level_2_React  from './level_2_React/level_tow_React/level_2_React' ;
import ReactCatchUp   from './level_2_React/reactCatchUp/reactCatchUp'     ;
import Position       from './Css/position/position'                       ;
import Id_Link        from './level_2_React/level_tow_React/id_Link'       ;
import Params         from './level_2_React/level_tow_React/params'        ;
import ParamRouters        from './level_2_React/routesMosh/paramRoutes'            ;
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/app"                                         component={App            } />
          <Route exact path="/input"                                       component={Rentals        } />
          <Route exact path="/customers"                                   component={Customers      } />
          <Route exact path="/not_found"                                   component={Not_found      } />
          <Route exact path="/bootstrap"                                   component={Bootstrap      } />
          <Route exact path="/bootstrap2"                                  component={Bootstrap2     } />
          <Route exact path="/grid"                                        component={Grid           } />
          <Route exact path="/card"                                        component={Card           } />
          <Route exact path="/flex"                                        component={Flex           } />
          <Route exact path="/divers"                                      component={Divers         } />
          <Route exact path="/Css/cssOne/1"                                component={CssOne         } />
          <Route exact path="/semantic-ui/SemanticUi"                      component={SemanticUi     } />
          <Route exact path="/axios/Axios"                                 component={Axios          } />
          <Route exact path="/axiosMosh/AxiosMosh"                         component={AxiosMosh      } />
          <Route exact path="/props_children/props_children"               component={props_children } />
          <Route exact path="/inputfile/inputfile"                         component={Inputfile      } />
          <Route exact path="/table/showtable"                             component={ShowTable      } />
          <Route exact path="/table_sort/table_sort"                       component={Table_sort     } />
          <Route exact path="/javascript"                                  component={Javascript     } />
          <Route exact path="/modal/modal1/modal_view"                     component={Modal_view     } />
          <Route exact path="/modal/modal2/modal_view2"                    component={Modal_view2    } />
          <Route exact path="/navs/navsViews"                              component={NavsViews      } />
          <Route exact path="/toggle/toggleView_1"                         component={toggleView_1   } />
          <Route exact path="/checkBox/CheckBoxView"                       component={CheckBoxView   } />
          <Route exact path="/contextAPI/ContextApi"                       component={ContextApi     } />
          <Route exact path="/level_2_React/level_tow_React/level_2_React" component={Level_2_React  } />
          <Route exact path="/src/components/level_2_React/reactCatchUp"   component={ReactCatchUp   } />
          <Route exact path="/Css/position/position"                       component={Position       } />
          <Route exact path="/level_2_React/level_tow_React/id_Link"       component={Id_Link        } />
          <Route       path="/level_tow_React/:id"                         component={Id_Link        } />
          <Route       path="/id_Link/:id"                                 component={Params         } />
          <Route exact path="/level_2_React/routesMosh/paramRoutes"       component={ParamRouters  } />

          <Route exact path="/"                                            component={App            } />

          {/* <Redirect to="/not_found" /> */}
          
         
          
        </Switch>
      </div>
    );
  }
}

export default Routes;
