import React, { Component } from 'react';
import { connect } from "react-redux";

import RoutePage from '@/router' 
// import LayOut from '@/views/LayOut' 


 

@connect(
  (state) => ({ num: state })
)
class App extends Component {

  componentDidMount() {
    
  }
  

  render() {
    return (
      <div>
        <RoutePage />
      </div>
    );
  }
}

// export default connect(
// (state)=>{
//   console.log(state)
//   return {

//   }
// },
// )(App);

export default App;