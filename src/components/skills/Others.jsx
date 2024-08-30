import React from "react";
import Data from "./Data2.jsx";

const Others = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        Core Subjects
        <br />
        <span className="skills__level">Theory Subjects</span>
      </h3>
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
      <h3 className="skills__title" style={{ paddingTop: "1.2rem" }}>
        Deployment Tools
        <br />
        <span className="skills__level">Worked with</span>
      </h3>
      <div className="skills__box">
        <div className="skills__group">
          <Data skill="Netlify" />
        </div>{" "}
        <div className="skills__group">
          <Data skill="Vercel" />
        </div>
        <div className="skills__group">
          <Data skill="Github" />
        </div>
      </div>
    </div>
  );
};

export default Others;
