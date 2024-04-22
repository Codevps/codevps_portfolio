import React, { useState } from "react";
import "./Toast.css";

const Toast = ({ message, setToast }) => {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => {
    setToast(false);
    setShowToast(false);
  };

  return (
    <div className={`toast ${showToast ? "show" : ""}`}>
      <div className="toast-content">
        <p>{message} </p>
        <button onClick={handleClose}>&times;</button>
      </div>
    </div>
  );
};

export default Toast;
