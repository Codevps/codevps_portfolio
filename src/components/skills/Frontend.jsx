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
          <Data skill="TypeScript" />
          <Data skill="Next Js" />
          <Data skill="Multer" />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
