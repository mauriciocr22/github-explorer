import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>  
    </BrowserRouter>
  )
}