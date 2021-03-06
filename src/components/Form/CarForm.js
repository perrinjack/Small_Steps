import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutoCompleteOrigin from '../AutoCompleteOrigin';
import AutoCompleteDestination from '../AutoCompleteDestination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default class CarForm extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="links animate__animated animate__zoomIn">
            <Row className="justify-content-center">
              <h1 id="tformHead">Car Travel Calculator</h1>
            </Row>
          </div>
          <div className="links animate__animated animate__zoomIn">

            <Row className="justify-content-center">
              <Form class="calculator">
                <AutoCompleteOrigin
                  origin_result1={this.props.handleInputChange}
                  origin_result2={this.props.handleInputChange2}
                  placeholder="Enter Departure Location"
                  name="origin"
                />
                <br />

                <AutoCompleteDestination
                  origin_result1={this.props.handleInputChange}
                  origin_result3={this.props.handleInputChange3}
                  placeholder="Enter Destination Location"
                  name="destination"
                />
                <br />
                <Row className="justify-content-center">
                  <Link to="/results">
                    <Button variant="success" type="submit" className="justify-content-center">
                      Calculate Emissions
                    </Button>
                  </Link>
                </Row>

                <br />
                <Row className="justify-content-center">
                  <p id="altFormHead">Choose another mode of transport:</p>
                </Row>
              </Form>
            </Row>

            <Row className="justify-content-center">
              <Link to="/plane">
                <Button className="buttonLinkForm " variant="light">
                  <i class="fa fa-plane fa-2x" id="iconP" aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/bus">
                <Button className="buttonLinkForm " variant="light">
                  <i class="fa fa-bus fa-2x" id="iconB" aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/train">
                <Button className="buttonLinkForm " variant="light">
                  <i class="fa fa-train fa-2x" id="iconT" aria-hidden="true"></i>
                </Button>
              </Link>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
