
import React, { Component } from 'react'

import { Modal, Button, Grid, Row, Col } from 'react-bootstrap'

class QRModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      show: true,
      onClick : props.onClick
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
  let close = () => this.setState({ show: false });
  let ok = () => {
    this.setState({show: false});
    this.state.onClick();
  };
  return (
    <div className="modal-container" style={{ height: 200 }}>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Grid>
              <Row className="show-grid">
                  <Col xs={1} md={1}></Col>
                  <Col xs={3} md={3}>{this.props.children}</Col>
                  <Col xs={1} md={1}></Col>
              </Row>
          </Grid>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
            <Button onClick={ok}>Ok</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default QRModal
