import React from "react";

const Error = ({ message }) => {
  return (
    <div
      className="alert alert-danger text-center font-weight-bold"
      role="alert"
    >
      {message}
    </div>
  );
};

export default Error;
