import React, { useState } from "react";
import "./SignupPopup.css";
import image from "../../Assets/signup-OCG-APNN.svg";

const SigninPopup = ({ onClose }) => {
  const [state, setState] = useState("Sign in");

  return (
    <div className={`popup signup-popup show d-none d-lg-flex`}>
      <button onClick={onClose} className="btn close-btn position-absolute">
        &times;
      </button>
      <div className="modal-content">
        <div className="modal-header custom-modal-header d-flex justify-content-center mb-4 ">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        <div className="px-4">
          <div className="d-flex justify-content-between  align-items-center mb-4">
            <h4 className="d-flex fw-bold">
              {state === "Sign in" ? "Create Account" : "Sign in"}
            </h4>
            {state === "Sign in" ? (
              <button onClick={() => setState("Sign up")} className="btn">
                Create Account
                <span className="text-primary"> Sign up</span>
              </button>
            ) : (
              <button onClick={() => setState("Sign in")} className="btn">
                Already have an account?
                <span className="text-primary"> Sign In</span>
              </button>
            )}
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column gap-2">
                  {state === "Sign in" ? (
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Name"
                    />
                  ) : (
                    ""
                  )}
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="form-control custom-input"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    className="form-control mb-4 custom-input"
                    placeholder="Confirm Password"
                  />
                  <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4">
                    Sign In
                  </button>
                  <div className="d-flex flex-column gap-2">
                    <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                      <i class="fa-brands fa-facebook"></i> Sign In with
                      Facebook
                    </button>
                    <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                      <i class="fa-brands fa-google"></i> Sign In with Google
                    </button>
                  </div>
                  <button className="btn d-none d-lg-block text-center forgot">
                    Forgot Password?
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column">
                  <img src={image} alt="" />
                  <p className="info-signup">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPopup;
