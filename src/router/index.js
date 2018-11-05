// import { Scrollbars } from 'react-custom-scrollbars';
import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import { Login, Register, Home, UserInfo, Contact, PageDetail } from "@/views";
import AuthRoute from "@/components/AuthRoute";


class RoutePage extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="RoutePage">
          <AuthRoute />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/userInfo" component={UserInfo} />
            <Route path="/home" component={Home} />
            <Route path="/pageDetail/:id" component={PageDetail} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RoutePage;
