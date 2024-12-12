import React from "react";
import "../App.css";

const EducationCard = ({ degree, institution, year, description }) => {
  return (
    <div className="education-card">
      <div className="education-card-header">
        <h3 className="degree">{degree}</h3>
        <span className="year">{year}</span>
      </div>
      <div className="institution">{institution}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default EducationCard;
