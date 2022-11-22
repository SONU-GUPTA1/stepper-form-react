import React, { memo, useEffect } from "react";
import "./steps.css";

function StepOne({ value, handleChange, setProceed }) {
  useEffect(() => {
    const check = () => {
      if (!value.firstName || !value.lastName || !value.email) {
        setProceed(false);
      } else {
        setProceed(true);
      }
    };
    check();
  }, [value]);

  return (
    <div className="steps">
      <div className="inp-div">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          placeholder="sonu"
          value={value.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="inp-div">
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          placeholder="gupta"
          value={value.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="inp-div">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="sonu@email.com"
          value={value.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default memo(StepOne);
