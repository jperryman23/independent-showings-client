import React, { Component } from 'react';
import '../App.css'

import Header from './Header';
import Footer from './Footer';


export default class About extends Component {
    render(){
        return(
            <div className="App">
                <Header />
                    <div className="container">
                        <h1>About - Network Properties</h1>
                    </div>
                <Footer />
            </div>
        )
    }
}
