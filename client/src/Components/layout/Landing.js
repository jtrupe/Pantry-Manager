import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "shards-react";

import "./style.css";


class Landing extends Component {
    render() {
        return (
            <Container className="container signup">
                <Row>
                    <Col sm="12" md="4" lg="3">
          </Col>
                    <Col className="text-center">
                        <h1>Recipe App</h1>
                        <h3>Find Recipes With The Ingridents You Have On Hand</h3>
                        <br />
                        
                        <br></br>
                        <div className="login">
                            <h4>Log In To Begin</h4>
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            ><Button theme="dark">Register</Button>

                            </Link>
                        
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text"
                            ><Button theme="dark">Log In</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col sm="12" md="4" lg="3">
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Landing;