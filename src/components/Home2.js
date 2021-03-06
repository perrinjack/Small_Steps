import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
export default class AirplaneForm extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <h1 id="formHead">Welcome to Small Steps</h1>
          </Row>
          <Row className="justify-content-center">
            <h5 id="formTag">Discover the carbon footprint of your journey, and help to combat climate change.</h5>
          </Row>
          <Row className="justify-content-center">
            <p id="formTag">Choose your mode of transport: </p>
          </Row>

          <div className="links animate__animated animate__zoomIn">

            <Row className="justify-content-center">
              <Link to="/driving">
                <Button className="buttonLink " variant="light" size="md">
                  <i class="fa fa-car fa-2x" id="iconC" aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/plane">
                <Button className="buttonLink" variant="light" size="md">
                  <i class="fa fa-plane fa-2x" id="iconP" aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/bus">
                <Button className="buttonLink" variant="light" size="md">
                  <i class="fa fa-bus fa-2x" id="iconB" aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/train">
                <Button className="buttonLink" variant="light" size="md">
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
