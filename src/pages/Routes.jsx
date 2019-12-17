import React from "react";
import {
    Switch,
    Route,
  } from "react-router-dom";

import { Home } from './Home/Home';

export function Routes(props) {
    return(
       <Switch>
           <Route exact path="/">
                <Home />
           </Route>
       </Switch>
    );
}
