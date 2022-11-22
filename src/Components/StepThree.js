import React, { memo, useEffect } from "react";
import "./steps.css";

function StepThree({ value, handleChange, handleCheck, setProceed }) {
  const check = () => {
    if (!value.password || !value.confirmPassword || !value.agreed) {
      setProceed(false);
    } else {
      setProceed(true);
    }
  };
  useEffect(() => {
    check();
  }, [value]);

  return (
    <div className="steps">
      <div className="inp-div">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={value.password}
          onChange={handleChange}
        />
      </div>
      <div className="inp-div">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm your password"
          value={value.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="inp-div">
        <label>Terms &amp; Conditions </label>
        <div className="check-div">
          <input
            type="checkBox"
            name="agreed"
            checked={value.agreed}
            onChange={handleCheck}
          />
          <p>By checking your agreed with our Terms &amp; Conditions.</p>
        </div>
      </div>
    </div>
  );
}

export default memo(StepThree);
