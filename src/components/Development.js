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

                <h2> <u>In the Pipeline</u> </h2>
                    <ul>
                        <li> INVESTOR OFFERING MEMORANDUMS </li>
                        <li> PENDING PROVISIONAL PATENT   </li>
                        <li> INVESTMENT CAPITAL </li>
                        <li> REAL ESTATE COMMISSION APPROVAL </li>
                        <li> USER CREDENTIAL VERIFICATION </li>
                    </ul>
            </div>

            </div>

        <Footer />

        </div>
        )
    }
}
