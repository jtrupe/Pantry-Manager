import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Form, FormGroup, FormInput } from "shards-react";
import { Button, Container, Row, Col } from "shards-react";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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
                            <Container className="container login signup">


                                <div className="row">

                                    <div className="col s8 offset-s2">

                                        <div className="col s12 text-center">
                                            <h3>
                                                <b>Login</b> below
              </h3>
                                            <strong className="grey-text text-darken-1"><u>
                                                Don't have an account?</u> <Link to="/register"><Button theme="dark">Register</Button></Link>
                                            </strong>
                                        </div>
                                        <br></br>
                                        <form noValidate onSubmit={this.onSubmit}>
                                            <div className="input-field col s12">
                                                <FormInput id="email"
                                                    placeholder="Email"
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                    error={errors.email}
                                                    type="email"
                                                    className={classnames("", {
                                                        invalid: errors.email || errors.emailnotfound
                                                    })}
                                                />

                                                <span className="red-text">
                                                    {errors.email}
                                                    {errors.emailnotfound}
                                                </span>
                                            </div>
                                            <br></br>
                                            <div className="input-field col s12">
                                                <FormInput
                                                    placeholder="Password"
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    id="password"
                                                    type="password"
                                                    className={classnames("", {
                                                        invalid: errors.password || errors.passwordincorrect
                                                    })}
                                                />
                                                <span className="red-text">
                                                    {errors.password}
                                                    {errors.passwordincorrect}
                                                </span>
                                            </div>
                                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                                <button
                                                    style={{
                                                        width: "150px",
                                                        borderRadius: "3px",
                                                        letterSpacing: "1.5px",
                                                        marginTop: "1rem"
                                                    }}
                                                    type="submit"
                                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                                >
                                                   <Button theme="dark">Log In</Button>
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
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);