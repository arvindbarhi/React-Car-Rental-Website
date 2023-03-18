import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  let submit = async (e) => {
    e.preventDefault();
    let payload = {
      email: email,
      password: passowrd,
    };
    try {
      const response = await LoginUser(payload);

      localStorage.setItem("token", JSON.stringify(response.data.data.Token));
      console.log(response.data.success);
      if (response.data.success == true) {
        window.location.href = "http://localhost:3000/home";
      }
    } catch (err) {
      alert("user not found with email or invalid password");
    }
  };

  const userBaseUrl = "http://localhost:3003/api";
  const userAxios = axios.create({
    baseURL: userBaseUrl,
    headers: {
      "Content-type": "application/json",
    },
  });

  const LoginUser = (payload) => {
    return userAxios.post("/user/login", payload);
  };

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
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="inputFiled">
                          <input
                            type="text"
                            placeholder="Password"
                            required={true}
                            tabIndex={3}
                            onChange={(e) => setPassowrd(e.target.value)}
                          />
                        </div>

                        <button onClick={submit} className="btn registerButton">
                          Login
                        </button>
                      </div>
                    </form>

                    <div>
                      <ul>
                        <li>
                          <div>
                            <Link
                              to="/reg"
                              className=" d-flex align-items-center gap-1"
                            >
                              <span
                                style={{ fontSize: "14px" }}
                                className="linkColor"
                              >
                                Don&apos;t have an account?
                              </span>
                            </Link>
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
