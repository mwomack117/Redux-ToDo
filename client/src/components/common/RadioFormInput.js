import React from "react";

const RadioFormInput = ({ name, value, type, onChange, label }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className="form-check-label">{value}</label>
    </div>
  );
};

export default RadioFormInput;
