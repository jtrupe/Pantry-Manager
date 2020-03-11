import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "shards-react";
import "./style.css"

class Landing extends Component {
    render() {
        return (
            <div className="container signup">
                <div className="row">
                    <div className="col s12 text-center">

                        <br />
                        <h3>Whats In Your Pantry?</h3>
                        <br />
                        <h4>Log In To Begin</h4>
                        <div className="col s6">
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            ><Button theme="primary">Register</Button>
                                
              </Link>
                        </div>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text"
                            ><Button theme="primary">Log In</Button>
                                
              </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;