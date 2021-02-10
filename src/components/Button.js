import React from "react";

const Button = ({ validatePage, message }) => {
  if (validatePage === false) return null;

  return <button> {message} </button>;
};

export default Button;
