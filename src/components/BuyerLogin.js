import React, { Component } from 'react';

import '../App.css';
//
import Header from './Header';
import Footer from './Footer';

export default class BuyerLogin extends Component {
    render() {
        return(
            <div className="App">
                <Header  />

                <div className="development-body">

                    <h2 className="pageHeaderTitle">Buyer Info</h2>

                <div className="development-text">

                    <h3> Whats new? </h3>
                </div>

                </div>
            <Footer />

        </div>
        )
    }
}
