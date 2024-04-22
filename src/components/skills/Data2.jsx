import React from "react";

const Data = ({ skill }) => {
  return (
    <div>
      <div className="skills__data">
        <i className="bx bx-badge-check"></i>
        <div>
          <p className="section__subtitle2">{skill}</p>
        </div>
      </div>
    </div>
  );
};

export default Data;
