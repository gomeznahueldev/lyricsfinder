import React from "react";

const Button = ({ type, value, textButton, disabled}) => {
  return <button type={type} value={value} disabled={disabled}> {textButton} </button>
};

export default Button;
