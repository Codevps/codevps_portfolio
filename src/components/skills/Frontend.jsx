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
          <Data skill="React Js" />
          <Data skill="Material Ui" />
          <Data skill="Socket.io" />
          <Data skill="Multer" />
        </div>

        <div className="skills__group">
          <Data skill="Next Js" />
          <Data skill="Git" />
          <Data skill="Wavesurfer" />
          <Data skill="Rapid" />
          <Data skill="Shazam" />
          <Data skill="Postman" />
          <Data skill="Tailwind Css" />
          <Data skill="Sanity.io" />
          <Data skill="FireBase" />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
