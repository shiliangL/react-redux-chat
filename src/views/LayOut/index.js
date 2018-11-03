import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import AudioPlayer from '@/components/AudioPlayer' 
// import { Scrollbars } from 'react-custom-scrollbars';
import { Home, Stuff, Contact, PageDetail } from "@/views";


class LayOut extends Component {

  render() {
    return (
      <HashRouter>
        <div className="LayOut">
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            {/* <Scrollbars
              autoHeight
              autoHeightMin={400}
              autoHeightMax={560}
              autoHide
              // Hide delay in ms
              autoHideTimeout={1000}
              // Duration for hide animation in ms.
              autoHideDuration={200}
            > */}
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/pageDetail/:id" component={PageDetail} />
              <Route path="/contact" component={Contact} />
            {/* </Scrollbars> */}
          </div>

          <AudioPlayer/>
        </div>
      </HashRouter>
    );
  }
}

export default LayOut;
