import React from "react";

const Button = ({ type, label, onClick }) => (
  <button type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
