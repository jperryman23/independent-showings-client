import React, {Component} from 'react';
import './App.css';

import createHistory from 'history/createBrowserHistory';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home';
// import Header from './components/Header';
// import Footer from './components/Footer';
import BuyerLogin from './components/BuyerLogin';
import AgentLogin from './components/AgentLogin';
import Development from './components/Development';
import Contact from './components/Contact';
import About from './components/About';

import ViewAgent from './components/sub-components/ViewAgent';

const history = createHistory()

history.listen((location) => {
    console.log(location);
})

class App extends Component {
    render() {
        return (
            <div className="App">

                <Router>
                    <div>
                        {/* <Provider store={store}> */}
                            <Route exact path="/" component={App}/>

                    {/* </Provider> */}
                    </div>
                </Router>


                <Route exact path='/ViewAgent' component={ViewAgent}/>

                <Route exact path="/Home" component={Home}/>
                <Route exact path="/BuyerLogin" component={BuyerLogin}/>
                <Route exact path="/AgentLogin" component={AgentLogin}/>
                <Route exact path="/Development" component={Development}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/About" component={About}/>

            </div>
        );
    }
}

export default App;
