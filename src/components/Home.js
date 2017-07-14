import React, { Component } from 'react';
import '../App.css'
import '../Homepage.css'

import Header from './Header';
import Footer from './Footer';

import {
  // BrowserRouter as Router,
  // Route,
} from 'react-router-dom'

const myTitle =['See properties on your own! ','See homes first','Immediate Showings','Faster timelines and less hassel', 'Gain the competetive edege']



export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            title: "Independent Showings, Making it easy"
        }
    }
    render(){

        setTimeout(()=>{
            const i = Math.floor(Math.random() * 5)
            this.setState({title: myTitle[i]})
        }, 2000)

        return(
        <div className="App">
        <Header />
            <div className="splash-body">
                {/* <div>
                    <h1>Home Page</h1>
                </div> */}

                <div className="taglines">
                    <h1> {this.state.title}</h1>
                </div>


            </div>

        <Footer />
        </div>
        )
    }
}
