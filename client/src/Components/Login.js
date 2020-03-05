import React from "react";

function Login() {
    return (
        <div className="col-sm-4 log-in">
            <h2>Login</h2>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1"><strong>Email Adress</strong></label>
                        <input id="login-email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1"><strong>Password</strong></label>
                        <input id="login-password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button id="user-select" type="submit" className="login-btn btn btn-primary">Submit</button>
                </form>
                <br></br>
                <h2>Signup</h2>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1"><strong>Email Adress</strong></label>
                        <input id="signup-email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1"><strong>Password</strong></label>
                        <input id="signup-password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button id="user-create" type="submit" className="signup-btn btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Login;