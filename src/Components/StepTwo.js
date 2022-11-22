import React, { memo, useEffect } from "react";
import "./steps.css";

function StepTwo({ value, handleChange, setProceed }) {
  const check = () => {
    if (!value.gender) {
      setProceed(false);
    } else if (value.gender && value.employment && !value.position) {
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
      <div className="radio-div">
        <p>Gender</p>
        <div className="flex">
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={value.gender === "male" && true}
            onChange={handleChange}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={value.gender === "female" && true}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="inp-div">
        <label>Employment</label>
        <select
          name="employment"
          value={value.employment}
          onChange={handleChange}
        >
          <option selected disabled>
            Select employment type
          </option>
          <option value="private">Private Job</option>
          <option value="government">Government</option>
          <option value="self">Self Employed</option>
          <option value="other">Other</option>
          <option value="">Not employment</option>
        </select>
      </div>
      {value.employment && (
        <div className="inp-div">
          <label>Position</label>
          <input
            type="text"
            name="position"
            placeholder="Software Engineer"
            value={value.position}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}

export default memo(StepTwo);
