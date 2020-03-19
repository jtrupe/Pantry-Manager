import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Pantry from "../../../src/Pages/pantry"
import Search from "../../../src/Pages/search"
class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm text-center">
                    
                        <h4>
                            Hello,  {user.name.split(" ")[0]}... here are your ingredients
                        </h4>
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-dark"
                        >
                                Logout
            </button>
            {/* <button onClick={() => console.log(user)}> store</button> */}
                    </div>
                </div>
          <Pantry userId={user.id}/>
            </div>
        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);