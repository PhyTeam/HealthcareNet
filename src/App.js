import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import SimpleHealthcareNet from '../build/contracts/SimpleHealthcareNet.json'
import getWeb3 from './utils/getWeb3'
import { BioVitual, Allergies, Conditions, Labs, Meds, Encounters } from './BioVitual.js'
import { Row, Col, Grid } from 'react-bootstrap'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import Sidebar from 'react-sidebar'
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

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
      web3: null
    }
  }

  componentDidMount() {
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    fetch("http://localhost:3001/patients/5a25905b429a196b51edf0c3")
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

  renderMedRec(med) {

    console.log(this.state.patient)
    const {patient} = this.state
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={2} md={2}></Col>
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
    const sample = {
      name: "Bui Ba Phuc",
      address: {
        street: "1314 East Franklin Avenue",
        area: "Minneapolis, MN 55404"
      },
      phone: "202-800-1210",
      email: "grandmalucy@email.net",
      dob: "DEC 28 1940",
      yearold: 72,
      bloodType: 'O-',
      code: 'JTTO331613'
    }

    const allergy1 = {
      type: "Severe",
      name: "Shellfish",
      description: "anaphylactic shock"
    }
    const allergy2 = {
      type: "",
      name: "Ketoconazole", 
      description: "dermatitis"
    }

    const event1 = {
      conditionName: "Ankle Sprain",
      date: "November 18, 2012",
      detail: {
        description: "Slipped on ice and fell.",
        encounters: "Example Encounter 03/31/2005",
        labs: "Example Lab 09/14/2007",
        medications: "Example Medication"
      }
    }
    const event2 = {
      conditionName: "Arthritis",
      date: "October 31, 2007",
      detail: {
        description: "Slipped on ice and fell.",
        encounters: "Example Encounter 03/31/2005",
        labs: "Example Lab 09/14/2007",
        medications: "Example Medication"
      }
    }

    const event3 = {
      conditionName: "Cholecystitis",
      date: "October 31, 2007",
      detail: {
        description: "Slipped on ice and fell.",
        encounters: "Example Encounter 03/31/2005",
        labs: "Example Lab 09/14/2007",
        medications: "Example Medication"
      }
    }

    const labs = {
      labName: "Fasting Blood Glucose",
      date: "two days ago",
      trending_analysis: "You are trending toward decreased fasting blood sugar measurements, and your current result is well within normal range.",
      labs_detail: "Ordered by Dr. Sean Daley, North Memorial Medical Center. ovember 30, 2012 — 1:42pm",
      physician_notes: "Continue to exercise 3x/week.",
      about: "A lab glucose test measures the amount of glucose sugar in your blood.  This test measures after you’ve been fasting for at least eight hours.  It’s often the first check for prediabetes or diabetes."
    }

    const meds = [
      {
        name: "Prescribed Medication (Pill)",
        type: "prescribed",
        medication: "Excedrin",
        dose: "600mg",
        instructions: "Take two pills, two times per day",
        prescribed_date: "Oct 14, 2012",
        refill: 5
      },
      {
        name: "Durable Medical",
        type: "durable",
        medication: "CPAP Machine ",
        dose: "Use 10cm H2O nightly.",
        instructions: "Take two pills, two times per day",
        prescribed_date: "Nov 5, 2006",
        refill: "N/A"
      }
    ]

    const encounter = {
      date: "June 22, 2012",
      type: "Office Visit",
      place: "Blaisdell Manor Health Services",
      goal: "Routine general medical examination at a health care facility, Screening for diabetes mellitus with lab glucose, Screening for ischemic heart disease ",
      outcomes: "Prescribed Ketoconzole, which was later found to cause a dermititis allergic reaction. Will follow up with lab results.",
      next_steps: "Call if you begin feeling burning sensations."
    }
    const encounter2 = {
      date: "August 14, 2011",
      type: "Emergency Room",
      place: "UCSF Medical Center",
      goal: "Patient presenting severe abdomen pain, Perform lab urinalysis, Perform complete blood count lab, Perform axial CT abdomen with IV contrast, Perform axial CT pelvis with IV contrast, Prepare emergency center draw and hold blood sample ",
      outcomes: "Epiploic appendices inflamed and self-limiting. Reactive scattered subcentimeter mesenteric lymph nodes. No major concerns. No adverse reaction to oral or 100 mL Optiray IV contrast. Prescribing pain medication. Return if condition worsens.",
      next_steps: null
    }
    const encounter3 = {
      date: "May 15, 2004",
      type: "Emergency Room",
      place: "Hennepin County Medical Center",
      goal: "Patient arrived via ambulance, in shock and stablized after eating shellfish with adverse reaction",
      outcomes: "Stabilized in emergency room with Ana-Kit and histamine blocker in ER. Adverse reaction to shellfish noted in allergies.",
      next_steps: null
    }

    const encounter4 = {
      date: "June 27, 1971",
      type: "Surgical Inpatient",
      place: "Burnett Medical Center",
      goal: "Labor and delivery by Cesarian section",
      outcomes: "Refer to send-home literature and return for postnatal checkup.",
      next_steps: null
    }

    const medrec = {
      bio: sample,
      allergies: [allergy1, allergy2],
      conditions: [event1, event2, event3],
      labs: labs,
      meds: meds,
      encounters: [encounter, encounter2, encounter3, encounter4]
    }

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
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Trang chu</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Thông tin liên hệ</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    const { isLoading, error } = this.state;
    if (isLoading) {
      return (<p> Loading ... </p>)
    } else if (error) {
      return (<p> Error while loading {this.state.error} </p> )
    } else {
      const GridSample = this.renderMedRec(medrec);
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
