import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hello,</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                                You are logged into The Recipe App
                             
              </p>
                        </h4>
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Logout
            </button>
                    </div>
                </div>
                <div className="title text-center mb-0 py-3">
                    <h1 className="display-4 text-center m-2">Pantry</h1>
                </div>

                <div className="row">

                    <div className="col-sm-6 pt-3 add">
                        <h2 className="text-center"><u>Add Ingredients</u></h2>
                        <input type="text" id="ingredient-search" class="form-control" placeholder="start typing to find your ingredient"/>
                            <div className="returned-search-items mt-4"></div>
    </div>

                        <div className="myIngredients col-sm-6 pt-3">
                            <h2 className="text-center mb-4"><u>My Ingredients</u></h2>
                            <div class="ingredient-list"></div>
                            {/* {{#each data}} */}
      <div className="pantry-item ml-3 font-weight">
                                Item Name: { }
                                <button value="{ }"
                                className="pantry-item-remove text-center btn btn-outline-dark pl-2 pr-1 float-right"><span role="img" aria-label="x">❌</span></button>
                                <hr/>
      </div>
                                {/* {{/ each}} */}
    </div>
                        </div>
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