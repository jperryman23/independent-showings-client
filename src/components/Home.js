import React, {Component} from 'react';
import '../App.css'
import '../Homepage.css'

import Header from './Header';
import Footer from './Footer';

// import home1 from '../images/home1.jpg'
// import home2 from '../images/home2.jpg'
// import home3 from '../images/home3.jpg'
// import home4 from '../images/home4.jpg'

import {
    // BrowserRouter as Router,
    // Route,
} from 'react-router-dom'

const myTitle = ['See properties on your own! ', 'No Agent Needed', 'Immediate Showings', 'Faster timelines and less hassel', 'Gain the competetive edge']

// const myImages = [home1, home2, home3, home4]

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            title: "Independent Showings, Making it easy",
            // image: home1
        }
    }
    render() {

        setTimeout(() => {
            const i = Math.floor(Math.random() * 5)
            this.setState({title: myTitle[i]})
        }, 2000)

        // setTimeout(()=>{
        //     const i = Math.floor(Math.random() * 5)
        //     this.setState({image: myImages[i]})
        // }, 4000)

        return (
            <div className="App">
                <Header/>

                <div className="home-body">
                    <h2 className="pageHeaderTitle">Home Page</h2>

                    <div className="taglines">
                        <h2 className="scrollText">
                            {this.state.title}</h2>

                    </div>

                    <div className="signature">
                        <div>
                            <p>
                                JULES PERRYMAN &nbsp; &nbsp; | &nbsp; &nbsp; CAPSTONE PROJECT &nbsp; &nbsp; | &nbsp; &nbsp; SUMMER 2017</p>
                        </div>
                        <img className="g46logo"  alt="logo" src='../images/g46logo.png'/>
                    </div>

                    {/* <img className="ui small fluid image" src={this.state.image} /> */}

                    {/* <div class="ui small image">
                    <svg width="150" height="150">
                        <img className="ui small fluid image" src={this.state.image} />
                    </svg>
                </div> */}

                </div>

                <Footer/>

            </div>
        )
    }
}
