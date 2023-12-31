import React from "react";
import cl from "./Myselect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={cl.select}
      value={value}
      onChange={(evt) => onChange(evt.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
