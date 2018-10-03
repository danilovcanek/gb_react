import React from "react";
import PropTypes from 'prop-types';
import './../styles/modal.css';
// import { Modal, Button } from 'react-bootstrap';

class MyLargeModal extends React.Component {
  render() {
    console.log(this.props);
    if(this.props.show){
      return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p>Some text in the Modal..</p>
            <button onClick={this.props.onHide}>Close</button>
          </div>
        </div>
      );
    }

    return (null);
  }
}

export default MyLargeModal;