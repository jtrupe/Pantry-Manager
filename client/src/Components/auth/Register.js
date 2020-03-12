import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Form, FormGroup, FormInput } from "shards-react";
import { Button, Container, Row, Col } from "shards-react";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <Row>
                <Col sm="12" md="4" lg="4">

                </Col>
                <Col sm="12" md="4" lg="4">
                    <Form>
                        <FormGroup>
                            <Container className="login signup">
                                <div>
                                    <div>
                                        <div className="text-center">
                                            <h3>
                                                <b>Register</b> below
              </h3>
                                            <p className="grey-text text-darken-1">
                                                <strong><u>Already have an account?</u></strong> <Link to="/login"><Button theme="dark">Log In</Button></Link>
                                            </p>
                                        </div>
                                        <form noValidate onSubmit={this.onSubmit}>
                                            <div className="input-field col s12">
                                                
                                                <FormInput
                                                    placeholder="Name:"
                                                    onChange={this.onChange}
                                                    value={this.state.name}
                                                    error={errors.name}
                                                    id="name"
                                                    type="text"
                                                    className={classnames("", {
                                                        invalid: errors.name
                                                    })}
                                                />
                                                <span className="red-text">{errors.name}</span>
                                            </div>
                                            <div className="input-field col s12">
                                                <br></br>
                                                <FormInput
                                                    placeholder="Email"
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                    error={errors.email}
                                                    id="email"
                                                    type="email"
                                                    className={classnames("", {
                                                        invalid: errors.email
                                                    })}
                                                />
                                                <span className="red-text">{errors.email}</span>
                                            </div>
                                            <div className="input-field col s12">
                                                <br></br>
                                                <FormInput
                                                    placeholder="Password"
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    id="password"
                                                    type="password"
                                                    className={classnames("", {
                                                        invalid: errors.password
                                                    })}
                                                />
                                                <span className="red-text">{errors.password}</span>
                                            </div>
                                            <div className="input-field col s12">
                                                <br></br>
                                                <FormInput
                                                    placeholder="Confirm Password"
                                                    onChange={this.onChange}
                                                    value={this.state.password2}
                                                    error={errors.password2}
                                                    id="password2"
                                                    type="password"
                                                    className={classnames("", {
                                                        invalid: errors.password2
                                                    })}
                                                />
                                                <span className="red-text">{errors.password2}</span>
                                            </div>
                                            <div className="col s12">
                                                <button
                                                    type="submit"
                                                    className="btn btn-large dark"
                                                >
                                                    <Button theme="dark">Sign Up</Button>
                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Container>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));