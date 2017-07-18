import React, {Component} from 'react';
import './App.css';

import createHistory from 'history/createBrowserHistory';

import {
    // BrowserRouter as Router,
    Route,
    // Link
} from 'react-router-dom'

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import BuyerLogin from './components/BuyerLogin';
import AgentLogin from './components/AgentLogin';
import Development from './components/Development';
import Contact from './components/Contact';
import About from './components/About';

import ViewAgent from './components/sub-components/ViewAgent';
import ViewBuyer from './components/sub-components/ViewBuyer';

const history = createHistory()

history.listen((location) => {
    console.log(location);
})

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header  />

                            <Route exact path="/" component={Home}/>



                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path='/ViewAgent' component={ViewAgent}/>
                <Route exact path='/ViewBuyer' component={ViewBuyer}/>
                <Route exact path="/BuyerLogin" component={BuyerLogin}/>
                <Route exact path="/AgentLogin" component={AgentLogin}/>
                <Route exact path="/Development" component={Development}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/About" component={About}/>


                <Footer />

            </div>
        );
    }
}

export default App;
