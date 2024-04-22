import React from "react";
import Data from "./Data";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        Backend Development <br />
        <span className="skills__level">Intermediate Hands On Skill</span>
      </h3>

      <div className="skills__box">
        <div className="skills__group">
          <Data skill="Node Js" />
          <Data skill="Mongo DB" />
          <Data skill="Express" />
          <Data skill="JWT Auth" />
        </div>

        <div className="skills__group">
          <Data skill="PostgreSql" />
          <Data skill="Rest Api" />
          <Data skill="Prisma" />
          <Data skill="Sanity.io" />
          <Data skill="Socket.io" />
        </div>
      </div>
    </div>
  );
};

export default Backend;
