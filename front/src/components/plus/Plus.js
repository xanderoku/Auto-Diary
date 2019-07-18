import React, { Component } from 'react';
import Pluscar from '../pluscar';

export default class Plus extends Component {
    constructor() {
        super();
        this.state = {
          modalIsOpen: false,
        };
      }
    
      closeModal = async () => {
         await this.setState({modalIsOpen: false});
        }
    
      openModal = async (question) => {
        await this.setState({ question })
        await this.setState({ modalIsOpen: true });
    
      }
    render() {
        return (
            <>
              <button onClick={ this.openModal}>
              <img src='https://avatanplus.com/files/resources/mid/5a2800924e8c01602c423b92.png' alt='add car'></img>
              </button>  
              {this.state.modalIsOpen && <Pluscar modalIsOpen={this.state.modalIsOpen} onModalClose={this.closeModal}/>}
            </>
        )
    }
}
