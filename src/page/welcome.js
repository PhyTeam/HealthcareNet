import React from 'react';
import { Page, Panel } from 'react-blur-admin';
import { Row, Col } from 'react-flex-proto';
import { GMap } from '../layout/components/gmap';
import {   BioVitual, Allergies, Conditions, Labs, Meds, Encounters } from '../BioVitual';

export class Welcome extends React.Component {

  render() {
    return (
      <Page title="{process.env.APP_NAME}">
        <Row>
          <Col padding={5}>
            <Panel>
              This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.
                    <section className="bio" id="bio">
                      <div className="row">
                          <div className="five columns">
                              <div className="panel patient-contact">
                                  <address id="tour-responsive">
                                     "yrtyrty"<br />
                                     "yrtyr"
                                  </address>
                                  <p>
                                      "ytryr"<br />
                                      <a href="#">"yrtyrt"</a>
                                  </p>
                              </div>
                          </div>
                          <div className="three columns" id="tour-patient-bio">

                          </div>
                          <div className="two columns">
                              <div id="tour-health-boxes">
                                  <h2>{95}</h2>
                                  <p>Tuổi</p>
                              </div>
                          </div>
                          <div>
                              <div className="tile-bignumber">
                                  <h2>yrty</h2>
                                  <p>Loại máu</p>
                              </div>
                          </div>
                      </div>
                  </section>
            </Panel>
          </Col>
        </Row>

        <h2>More Panels</h2>
        <Row>
          <Col padding={5}>
            <Panel title="Tuổi">
              <div id="tour-health-boxes">
                  <h2>{95}</h2>
                  <p></p>
              </div>
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel title='Yellow paragraph'>
                <div className="tile-bignumber">
                    <h2>yrty</h2>
                    <p>Loại máu</p>
                </div>
            </Panel>
          </Col>
          <Col padding={5}>
            <Panel title='Blue paragraph'>
              <div>
                  <img src="images/fpo-barcode.png" alt="Barcode" className="barcode" />
                  <p>JTTO331613</p>
                  <p>htryrt</p>
              </div>            
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col padding={5}>
            <Panel title='Google Map Component'>
              
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

