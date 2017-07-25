import React, {Component} from 'react';
// import ReactDom from 'react-dom';
// import Modal from 'react-modal';

import '../../App.css';
import './buyer.css';
import LoggedinFooter from './LoggedinFooter';
import BuyerHeader from './BuyerHeader';




export default class ViewBuyer extends Component {
    handleClick(){
        alert( 'Independent Showing Confirmation: Appt. on 1822 W 33rd for 7/19 @ 9:00 PM has been CONFIRMED. Instructions: lockbock code: 1349 please take off your shoes and lock doors')
    }
    render(
    ) {
        return (
            <div className="viewBuyerApp">
                <BuyerHeader/>

                <div className="buyer-content">
                    {/* <h2>Property Search</h2> */}
                    <div className="ui center aligned container">

                        <h1>Welcome Jules</h1>



                        <h2>Search Network Properties</h2>

                        <div className="ui icon input">
                            <input type="text" placeholder="Search for a property..." />
                            <i className="search link icon"></i>
                        </div>

                        <table className="ui celled table theListSearch">

                            <thead >
                                <tr>
                                    <th>MLS ID</th>
                                    <th>Showing Date</th>
                                    <th>Property Address</th>
                                    <th>Listing Agent</th>
                                    <th>Brokerage Firm</th>
                                    <th>Contact Number</th>
                                    <th>Schedule Showing</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <a>152346</a>
                                    </td>
                                    <td>May 21, 2017</td>
                                    <td>1822 W 33rd
                                    </td>
                                    <td>Jules Perryman</td>
                                    <td>Apex Real Estate</td>
                                    <td>303-586-1468</td>
                                    <td>



                                        <div className="ui inverted segment">
                                            <button className="ui inverted
                                                green button " onClick={this.handleClick}>Schedule showing Now</button>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <div className="theList">
                        <h2>My Property Log</h2>

                        <table className="ui celled table">

                            <thead>
                                <tr>
                                    <th>MLS ID</th>
                                    <th>Showing Date</th>
                                    <th>Property Address</th>
                                    <th>Listing Agent</th>
                                    <th>Brokerage Firm</th>
                                    <th>Contact Number</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <a>234561</a>
                                    </td>
                                    <td>May 21, 2017</td>
                                    <td>2834 W Stuart Street</td>
                                    <td>Paul Tamberllo</td>
                                    <td>Generator Real Estate, LLC</td>
                                    <td>303-586-1468</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a>134334</a>
                                    </td>
                                    <td>June 21, 2017</td>
                                    <td>1234 Manor Lane</td>
                                    <td>Jules Perryman</td>
                                    <td>Apex Real Estate</td>
                                    <td>303-111-1133</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a>597331</a>
                                    </td>
                                    <td>July 5, 2017</td>
                                    <td>1111 Gaylord Street</td>
                                    <td>Jon Lopez</td>
                                    <td>Kentwood Company</td>
                                    <td>303-586-1468</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a>232261</a>
                                    </td>
                                    <td>July 22, 2017</td>
                                    <td>123 Elm St</td>
                                    <td>Carol Hanson</td>
                                    <td>Remax Denver</td>
                                    <td>303-586-1468</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a>783278</a>
                                    </td>
                                    <td>August 13, 2017</td>
                                    <td>3632 W Harvard Ave</td>
                                    <td>Adam Waggoner</td>
                                    <td>PorchLight Real Estate</td>
                                    <td>303-586-1468</td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>

                <LoggedinFooter/>
            </div>
        )
    }
}
