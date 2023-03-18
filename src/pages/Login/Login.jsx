import "./login.css";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className=" mt-5">
              {/* <h2 className=" text-center">Create your account</h2> */}

              <div>
                <div className="formContainer">
                  <div className="googleButton">
                    <div className=" text-center">Continue with Google</div>
                  </div>

                  <div className=" ">
                    <div className="orDivider">
                      <span className="horizontalRow"></span>
                      <span className="or-span">OR</span>
                      <span className="horizontalRow"></span>
                    </div>

                    <form>
                      <div className="form-group">
                        <div className="inputFiled">
                          <input
                            placeholder="Email Address"
                            required={true}
                            type="email"
                            tabIndex={2}
                          />
                        </div>

                        <div className="inputFiled">
                          <input
                            type="text"
                            placeholder="Password"
                            required={true}
                            tabIndex={3}
                          />
                        </div>

                        <div className="mt-1">
                          <input id="show_confirm_pass" type="checkbox" />

                          <label className="smallP" htmlFor="show_confirm_pass">
                            &nbsp; Show Password
                          </label>
                        </div>

                        <button className="btn registerButton" type="submit">
                          Login
                        </button>
                      </div>
                    </form>

                    <div>
                      <ul>
                        <li>
                          <div>
                            <span
                              style={{ fontSize: "14px" }}
                              className="linkColor"
                            >
                              Don&apos;t have an account?
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span
                              style={{ fontSize: "14px" }}
                              className="linkColor"
                            >
                              Forgot password?
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
