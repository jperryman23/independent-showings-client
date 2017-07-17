import React, { Component } from 'react';
import '../App.css'
import '../Homepage.css'

import Header from './Header';
import Footer from './Footer';

import home1 from '../images/home1.jpg'
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.jpg'
import home4 from '../images/home4.jpg'


import {
  // BrowserRouter as Router,
  // Route,
} from 'react-router-dom'

const myTitle =['See properties on your own! ','See homes first','Immediate Showings','Faster timelines and less hassel', 'Gain the competetive edege']

// const myImages = [home1, home2, home3, home4]

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            title: "Independent Showings, Making it easy",
            image: home1
        }
    }
    render(){

        setTimeout(()=>{
            const i = Math.floor(Math.random() * 5)
            this.setState({title: myTitle[i]})
        }, 2000)


        // setTimeout(()=>{
        //     const i = Math.floor(Math.random() * 5)
        //     this.setState({image: myImages[i]})
        // }, 4000)

        return(
        <div className="App">
        <Header />


            <div className="home-body">
                <h1>Home Page</h1>


                <div className="taglines">
                    <h2> {this.state.title}</h2>

                </div>
                {/* <img className="ui small fluid image" src={this.state.image} />  */}


            </div>

        <Footer />
        </div>
        )
    }
}
