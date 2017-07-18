import React, {Component} from 'react';
import '../../App.css';
import './buyer.css';
import LoggedinFooter from './LoggedinFooter';
import BuyerHeader from './BuyerHeader';

export default class ViewBuyer extends Component {
    render() {
        return (
            <div className="viewBuyerApp">
            <BuyerHeader/>
            <h1>Welcome Paul</h1>


            <div className="buyer-content">


                    <h2>Property Search</h2>
                <div className="ui aligned container">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search for a property..."/>
                        <i className="search link icon"></i>
                    </div>
                </div>


                    <div className="ui center aligned container">
                        {/* <h2>Showing History Log</h2>
                        <p>Test</p> */}
                    </div>


                    <div className="ui center aligned container">
                        <h2>Showing History Log</h2>
                        <p>Test</p>
                    </div>

                    <div className="ui center aligned container">
                        {/* <h2>Showing History Log</h2>
                        <p>Test</p> */}
                    </div>

            </div>

         <LoggedinFooter /> </div>)
    }
}
