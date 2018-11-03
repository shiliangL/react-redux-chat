// import { Scrollbars } from 'react-custom-scrollbars';
import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Login,Register,Home, Stuff, Contact, PageDetail } from "@/views";
import AuthRoute from "@/components/AuthRoute";


class RoutePage extends Component {

  render() {
    return (
      <HashRouter>
        <div className="RoutePage">
          <AuthRoute />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route path="/register" component={Register} /> */}
          <Route path="/" component={Register} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/stuff" component={Stuff} />
          <Route path="/pageDetail/:id" component={PageDetail} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default RoutePage;
