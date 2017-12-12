import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import SimpleHealthcareNet from '../build/contracts/SimpleHealthcareNet.json'
import getWeb3 from './utils/getWeb3'
import { BioVitual, Allergies, Conditions, Labs, Meds, Encounters } from './BioVitual.js'
import { Row, Col, Grid } from 'react-bootstrap'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import Sidebar from 'react-sidebar'
import QRModal from './QRModal.js'
import QRCode from 'qrcode.react'
import medrec from './sampleDb.js'
import getDatabaseName from './utils/getDatabaseName'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import './css/sidebar.css'
class MySidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {

  }

  render() {

    var sidebarContent = <p> Sidebar content................................................ </p>;
    return (
      <Sidebar sidebar={sidebarContent}
             open={this.state.sidebarOpen}
             docked={true}
             onSetOpen={this.onSetSidebarOpen}>
          <b>Main content</b>
      </Sidebar>
  )}
}


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      patient: null,
      error: null,
      isLoading: true,
      storageValue: 0,
      web3: null,
      isModalClosed: false
    }
  }

  componentDidMount() {
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getDatabaseName
      .then(result => {
        return fetch(result)
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);

          this.setState({
            patient: result,
            isLoading: false
          })
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoading: false,
            error
          })
        }
    );

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      //this.instantiateContract()
      //this.instantiateContract2()
      this.handleCreateNewContract();
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {

/*
      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance

        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      }).catch((error) => {
        console.log(error);
      });
*/
    simpleStorage.deployed().then((instance) => {
      simpleStorageInstance = instance;

      return simpleStorageInstance.get.call(accounts[0])
    }).then((result) => {
      return this.setState({ storageValue: result.c[0]})
    }).catch((error) => {
      console.log(error)
    })
    })
  }

  instantiateContract2() {
    const contract = require('truffle-contract')
    const simpleHN = contract(SimpleHealthcareNet)
    simpleHN.setProvider(this.state.web3.currentProvider)

    var myInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.setState((previousState, props) => {
        previousState.web3.eth.defaultAccount = accounts[0];
        return previousState;
      })

      simpleHN.deployed().then((instance) => {
        myInstance = instance;
        console.log(instance)
        console.log(accounts[0])
        //return myInstance.get.call(1,accounts[0])
        return myInstance.set({ hash:'744f06e3c69a5d893a774fb5537f180', url: "744f06e3c69a5d893a774fb5537f180"}, {from: '0x02F0B6ea96Df0f9475Bca1289ecB8b32465F2524'})
      }).then((results)=> {
        console.log(results)

      }).catch((error) => {
        console.log(error)
      })
    })
  }

  handleCreateNewContract() {
    const contract = require('truffle-contract')
    const simpleHN = contract(SimpleHealthcareNet)



    simpleHN.setProvider(this.state.web3.currentProvider)

    var myInstance

    // Get accounts
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.setState((previousState, props) => {
        previousState.web3.eth.defaultAccount = accounts[0];
        return previousState;
      });

      simpleHN.new().then(function(instance) {
        // Print the new address
        alert("Created contract")
        console.log(instance.address);
      }).catch(function(err) {
        // There was an error! Handle it.
        console.log(err)
      });
    })
  }

  handleSubmitMedRecord() {

  }

  renderMedRec(med, sidebar) {
    console.log(this.state.patient)
    const {patient} = this.state
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={2} md={2}>{sidebar}</Col>
            <Col xs={10} md={10}>
              <BioVitual value={patient.bio} />
              <Allergies value={med.allergies}/>
              <Conditions value={patient.conditions} />
              <Labs value={med.labs}/>
              <Meds value={med.meds}/>
              <Encounters value={med.encounters}/>
            </Col>
          </Row>
        </Grid>
    )
  }

  render() {
    const navbarInstance = (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Healthcare Net</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Trang chủ</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    const sidebar = (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <a href="#">
                    Lịch sử khám bệnh
                </a>
            </li>
            <li>
                <a href="#">Bệnh viện chợ rẫy 26/9/2017</a>
            </li>
            <li>
                <a href="#">Bệnh viện quốc tế 25/10/2017</a>
            </li>
            <li>
                <a href="#">bệnh viện quốc tế 24/10/2017</a>
            </li>
        </ul>
    </div>
  );

    const { isLoading, error } = this.state;
    if (!this.state.isModalClosed) {
      return (
        <QRModal onClick={()=> this.setState({isModalClosed: true})}>
          <QRCode size={256} value="http://facebook.github.io/react/" />
        </QRModal>
      )
    } else if (isLoading) {
      return <p> Downloading ... </p>
    }
    else if (error) {
      return (<p> Error while loading {this.state.error} </p> )
    } else {
      const GridSample = this.renderMedRec(medrec, sidebar);
      return (
        <div className="App">
          <div>
            {navbarInstance}
          </div>
          <main className="container">
              {GridSample}
          </main>
        </div>
      );
    }
  }
}

export default App
