
import React, { Component } from 'react'

import { Modal, Button, Grid, Row, Col } from 'react-bootstrap'
import { FormGroup, ControlLabel,  FormControl, HelpBlock } from 'react-bootstrap'

class FieldGroup extends Component {
  render() {
      return (
        <FormGroup controlId={this.props.id}>
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl {...this.props} />
          {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
        </FormGroup>
      );
  }
}

class QRModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      show: true,
      onClick : props.onClick,
      address: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    console.log(this.state.address);
    this.setState({address: event.target.value});
  }

  render() {
    let close = () => this.setState({ show: false });
    let ok = () => {
      this.setState({show: false});
      this.state.onClick(this.state.address);
    };
    return (
      <div className="modal-container" style={{ height: 200 }}>
          <Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title" >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Nhập mã truy cập cho bệnh nhân</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={1}></Col>
                    <Col xs={3} md={3}>{this.props.children}</Col>
                    <Col xs={1} md={1}></Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={8} md={8}>
                    <form>
                     <FieldGroup
                      id="formControlsText"
                      type="text"
                      label="Patient ID:"
                      placeholder="Enter text"
                      onChange={this.handleChange}
                      value={this.state.address} />
                    </form>
                  </Col>
                </Row>
              </Grid>
              <p>
              Xin vui lòng quét mã này để truy cập vào hồ sơ
              </p>
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
