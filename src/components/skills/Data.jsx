import React from "react";

const Data = ({ skill }) => {
  return (
    <div>
      <div className="skills__data">
        <i className="bx bx-badge-check"></i>
        <div>
          <h3 className="skills__name">{skill}</h3>
        </div>
      </div>
    </div>
  );
};

export default Data;
