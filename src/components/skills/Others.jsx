import React from "react";
import Data from "./Data2.jsx";

const Others = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Core Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <Data skill="DSA" />
          <Data skill="DBMS" />
        </div>
        <div className="skills__group">
          <Data skill="OOPS" />
          <Data skill="OS" />
        </div>{" "}
        <div className="skills__group">
          <Data skill="CN" />
          <Data skill="CP" />
        </div>
      </div>
    </div>
  );
};

export default Others;
