import React from 'react';

import { Row, Col,Table, Button, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {styles, headings} from '../../../assets/styles/variables';

const TeamDisplay = (props) => (
    <Row>
        <Col md={12}>
          <div id="panelDemo8" className="panel panel-primary" >
            <div className="panel-heading" style={styles.primaryDark} >
              <Row>
                <Col md={6}>
                  <h4 style={headings.tableHeading}>TeamDisplay</h4>
                </Col>
              </Row>
            </div>

              { /* START table-responsive */}
              <Table id="table-ext-2" responsive striped bordered hover>
                  <thead>
                      <tr>
                          <th style={{width: '120px'}}>
                            Leadership
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {props.renderLeadership()}
                  </tbody>
                  <thead>
                      <tr>
                        <th style={{width: '120px'}}> Team</th>
                      </tr>
                  </thead>
                  <tbody>
                    {props.renderTeam()}
                  </tbody>
                  <thead>
                    <tr>
                        <th style={{cursor: 'pointer'}}><a> See all</a></th>
                    </tr>
                </thead>
              </Table>
              { /* END table-responsive */}
              {/* <div className="panel-footer">Panel Footer</div> */}
          </div>
        </Col>

    </Row>
)

export default TeamDisplay;
