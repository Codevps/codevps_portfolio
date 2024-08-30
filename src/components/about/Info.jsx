import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 months Freelancing</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">WFH</h3>
        <span className="about__subtitle">
          <small>availb. </small>
          <b>24/7</b>
        </span>
      </div>
    </div>
  );
};

export default Info;
