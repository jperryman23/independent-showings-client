import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';




export default class Development extends Component {
    render(){
        return(
            <div className="App">

                <Header  />
            <div className="development-body">

                <h2 className="pageHeaderTitle"> Developent Page</h2>

            <div className="development-text">

                <h3> In the Pipeline </h3>
            </div>

            </div>

        <Footer />

        </div>
        )
    }
}
