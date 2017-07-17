import React, {Component} from 'react';
import '../App.css'

// import Header from './Header';
// import Footer from './Footer';

export default class About extends Component {
    render() {
        return (
            <div className="App">


                <div className="about-page-body">
                    <h1>About Independent Showings </h1>

                <div className="about-page-content">
                    <div className="ui vertically divided grid">
                        <div className="three column row">
                            <div className="column">
                                <h1 className="about-header">What We Do </h1>
                                     <h3> Project description</h3>
                                <p>Independent Showings is a full stack web app that allows Buyers who are looking for new home to schedule impromptu showings without requiring a licensed Realtor or agent to be present.</p>

                                <p>Prospective buyers must sign up and provide specific personal information which the App then validates, verifies and approves.</p>

                                <p>Once approved, they will have a unique showing id, which can be traced back to them and which they will use to set up showings with the Listing Broker of said property.</p>

                                <p>Real Estate Agents who wish to participate in this will also need to create a brief profile.</p>
                            </div>
                            <div className="column">
                                <h1 className="about-header">Identifying The Problem </h1>
                                <h3> An Ineffecient Process</h3>
                                <p>In the residential real estate market there is an inherent inefficiency in the buying process. Both Buyers and Agents are so often frustrated that both parties need to be present for any and all showings. This takes not only coordination of both parties schedules but also usually involves multiple trips and repeat visits.</p>

                                <p>Almost invariably, Buyers who are in the process of searching for a new home, while driving around end up seeing a house and think "Oh that looks like a cool house, I'd love to see it."</p>
{/*
                                <p>In order for them to see it, the current status quo, requires they need to contact their Agent, who in turn needs to contact the Listing's Showing Service, and the Showing Service then must contact the Seller's for approval, and then back back up the chain.</p> */}

                            </div>
                            <div className="column">
                                <h1 className="about-header"> Providing A Solution </h1>
                                <h3> How we solve it</h3>
                                <p>Now, imagine if those same Buyers whom, in passing, noticed a house for sale could simply call the Listing Agent and see it immediately!</p>

                                <p>This app solves that gap. It alleviates the necessity for agents to always be present and streamlines the initial steps of the buying process.</p>
{/*
                                <p>This will solve the aforementioned problem by creating the platform through which consumers, after having be approved, can set up showings independently without a licensed Agent. The Agents, in turn may have the opportunity to not only sell their listing faster but potentially double end the transaction.</p> */}

                            </div>
                        </div>


                    </div>
                </div>

                </div>

            </div>
        )
    }
}
