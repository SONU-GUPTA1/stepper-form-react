import React, { useState } from "react";
import StepOne from "../Components/StepOne";
import StepThree from "../Components/StepThree";
import StepTwo from "../Components/StepTwo";
import "./Main.css";

function Main() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    employment: "",
    position: "",
    password: "",
    confirmPassword: "",
    agreed: false,
    date: new Date().toLocaleDateString(),
  });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
  const [proceed, setProceed] = useState(true);

  //handle onChange event
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setShow(true);
    }, 4000);
  };

  return (
    <div className="container">
      <h1>Resistration</h1>
      <div className="form-div center">
        <div className="indicators-div">
          <div
            className={
              step === 1
                ? "indicators-active"
                : step > 1
                ? "indicators-done"
                : null
            }
          >
            <h2>1</h2>
          </div>
          <div
            className={
              step === 2
                ? "indicators-active"
                : step < 2
                ? "indicators-left"
                : step > 2
                ? "indicators-done"
                : null
            }
          >
            <h2>2</h2>
          </div>
          <div
            className={
              step === 3
                ? "indicators-active"
                : step < 2
                ? "indicators-left"
                : null
            }
          >
            <h2>3</h2>
          </div>
        </div>
        {/* progress starts */}
        <div className="progress-div center-block">
          <progress
            value={Math.ceil(step * 33.33)}
            max="100"
            className="progress"
          ></progress>
        </div>
        {/* progress ends */}
        {/* step component start */}
        {step === 1 ? (
          <StepOne
            value={state}
            handleChange={handleChange}
            setProceed={setProceed}
          />
        ) : step === 2 ? (
          <StepTwo
            value={state}
            handleChange={handleChange}
            setProceed={setProceed}
          />
        ) : step === 3 ? (
          <StepThree
            value={state}
            handleChange={handleChange}
            handleCheck={handleCheck}
            setProceed={setProceed}
          />
        ) : null}
      </div>
      {/* form div ends */}
      <div className="button-div center">
        {step > 1 && (
          <button
            className="back-btn"
            onClick={() => setStep(step - 1)}
            disabled={loading}
          >
            Back
          </button>
        )}
        {step < 3 && (
          <button
            className="next-btn"
            onClick={() => setStep(step + 1)}
            disabled={loading || !proceed}
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={loading || !proceed}
          >
            {loading && !show ? "Sending..." : "submit"}
          </button>
        )}
      </div>
      {/*  button div ends */}
      {show && (
        <div className="overlay-div">
          <div className="final-div">
            <div className="flex">
              <h2>Success!</h2>
              <h3 onClick={() => window.location.reload()}>&times;</h3>
            </div>
            <hr></hr>
            <p>Resistration Successfull</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
