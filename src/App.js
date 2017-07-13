import React, { Component } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Splash from './components/Splash';
import Home from './components/Home';
import About from './components/About';
import BuyerLogin from './components/BuyerLogin';
import AgentLogin from './components/AgentLogin';
import Development from './components/Development';
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (
      <div className="App">


            <Router>

            {/* <Provider store={store}> */}
                <Route exact path="/" component={Splash} />
            {/* </Provider> */}
            </Router>




        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/BuyerLogin" component={BuyerLogin} />
        <Route exact path="/AgentLogin" component={AgentLogin} />
        <Route exact path="/Development" component={Development} />
        <Route exact path="/Contact" component={Contact} />


      </div>
    );
  }
}

export default App;
