import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { Button, Modal } from 'semantic-ui-react'



export default class Development extends Component {
    render(){
        return(
            <div className="App">
                <Header/>
            <div className="container">
                <h1>Development / Investors Page</h1>


                const ModalModalExample = () => (
                  <Modal size="small" trigger={<Button>Login</Button>}>

                    <Modal.Content>
                        <h1>Please Log in</h1>
                      <Modal.Description>
                        <h3>Default Profile Image</h3>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>


            </div>
        <Footer />
        </div>
        )
    }
}
