import React from "react";
import Data from "./Data";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        Frontend development
        <br />
        <span className="skills__level">Intermediate Hands On Skill</span>
      </h3>
      <div className="skills__box">
        <div className="skills__group">
          <Data skill="HTML" />
          <Data skill="Css" />
          <Data skill="JavaScript" />
          <Data skill="BootStrap" />
          <Data skill="Material Ui" />
        </div>

        <div className="skills__group">
          <Data skill="Tailwind Css" />
          <Data skill="React Js" />
          <Data skill="React Redux" />
          <Data skill="Redux toolkit" />
          <Data skill="Next Js" />
          <Data skill="TypeScript" />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
