import React from "react";
import Api from "./Api.jsx";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Others from "./Others.jsx";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Api />
        <Backend />
        <Others />
      </div>
    </section>
  );
};

export default Skills;
