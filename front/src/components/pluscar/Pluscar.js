import React, { Component } from 'react';
import Modal from 'react-modal';
import ImageUpload from '../ImageUpload';
import Year from '../pluscarYear';
import Model from '../pluscarModel';
import Engine from '../pluscarEngine';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  export default class Pluscar extends Component {
    
    // closeModal = async () => {
    //     await this.setState({modalIsOpen: false});
    //   }

      afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }

    render() {
        return (
            <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.onModalClose}
          style={customStyles}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>ADD YOUR CAR</h2>
          <hr></hr>
          <ImageUpload/>
          <Year/>
          <Model/>
          <Engine/>
          <button onClick={this.props.onModalClose}>Add</button>
        </Modal>
            </div>
        )
    }
}
