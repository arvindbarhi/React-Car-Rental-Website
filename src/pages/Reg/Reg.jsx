import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./Reg.css";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [addres, setAddres] = useState("");
  const [name, setName] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const navigate = useNavigate();

  let submit = async (e) => {
    e.preventDefault();
    let payload = {
      name: name,
      email: email,
      mobile: mobile,
      address: addres,
      password: passowrd,
    };
    try {
      const response = await Registration(payload);
      if (response.data.success) {
        navigate("/login");
      }
    } catch (err) {
      console.log("Manish");
    }
  };

  const userBaseUrl = "http://localhost:3003/api";
  const userAxios = axios.create({
    baseURL: userBaseUrl,
    headers: {
      "Content-type": "application/json",
    },
  });

  const Registration = (payload) => {
    return userAxios.post("/user/register", {
      payload,
    });
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
                            placeholder="Enter Your Name"
                            required={true}
                            type="text"
                            tabIndex={2}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div className="inputFiled">
                          <input
                            type="text"
                            placeholder="Enter Email Address"
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="inputFiled">
                          <input
                            type="text"
                            placeholder="Enter Password"
                            required={true}
                            onChange={(e) => setPassowrd(e.target.value)}
                          />
                        </div>

                        <div className="inputFiled">
                          <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            required={true}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>

                        <div className="inputFiled">
                          <input
                            type="text"
                            placeholder="Enter Address"
                            required={true}
                            onChange={(e) => setAddres(e.target.value)}
                          />
                        </div>

                        <button onClick={submit} className="btn registerButton">
                          Register
                        </button>
                      </div>
                    </form>

                    <div>
                      <ul>
                        <li>
                          <div>
                            <Link
                              to="/login"
                              className=" d-flex align-items-center gap-1"
                            >
                              <span
                                style={{ fontSize: "14px" }}
                                className="linkColor"
                              >
                                Already have an account?
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

export default Reg;
