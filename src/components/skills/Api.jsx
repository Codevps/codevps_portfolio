import React from "react";
import Data from "./Data";

const Api = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        API's
        <br />
        <span className="skills__level">Interacted with api's</span>
      </h3>
      <div className="skills__box">
        <div className="skills__group">
          <Data skill="REST" />
          <Data skill="Shazam-core" />
          <Data skill="RapidApi" />
          <Data skill="Wavesurfer" />
        </div>

        <div className="skills__group">
          <Data skill="Postman" />
          <Data skill="Sanity.io" />
          <Data skill="Socket.io" />
          <Data skill="Prisma" />
        </div>
      </div>
    </div>
  );
};

export default Api;
