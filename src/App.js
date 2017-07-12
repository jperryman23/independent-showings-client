import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {
  // BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Home from './components/Home';
import About from './components/About';
import BuyerLogin from './components/BuyerLogin';
import BrokerLogin from './components/BrokerLogin';
import Development from './components/Development';
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

            <div>
                <h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    Independent Showings <small> | making it easy </small>
                </h1>
            </div>


            <div className="large ui inverted blue animated fade button" tabindex="0">
                <div className="visible content">New User</div>
                <div className="hidden content"> Sign Up </div>
            </div>


        </div>



        <div className="ui six item menu">
            <Link className="item"  to="/Home">Home</Link>
            <Link className="item"  to="/About">About</Link>
            <Link className="item"  to="/BuyerLogin">Buyer Login </Link>
            <Link className="item"  to="/BrokerLogin">BrokerLogin</Link>
            <Link className="item"  to="/Development">Development</Link>
            <Link className="item"  to="/Contact">Contact</Link>
        </div>



        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route exact path="/BuyerLogin" component={BuyerLogin} />
        <Route exact path="/BrokerLogin" component={BrokerLogin} />
        <Route exact path="/Development" component={Development} />
        <Route exact path="/Contact" component={Contact} />


      </div>
    );
  }
}

export default App;
