import React from "react";

const ErrorMessage = () => {
  return (
    <div className="error flex flex--center">
      <div className="error__box">
        <h2 className="error__heading">Error!</h2>
        <p className="error__message">Something awful has happened.</p>
      </div>
    </div>
  );
};

export default ErrorMessage;