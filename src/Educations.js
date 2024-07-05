// Education Section 

import React from 'react';
import './Styles.css';

const Education = ({ institution, degree, years }) => {
  return (
    <div className="education">
      <h3>{institution}</h3>
      <p>{degree}</p>
      <p>{years}</p>
    </div>
  );
};

const Educations = () => {
  const educationsData = [
    { institution: "University of South Florida", degree: "Bachelor of Science in Business Analytics and Information Systems", years: "2022 - Present" },
  ];

  return (
    <div className="educations">
      <h2>Education</h2>
      {educationsData.map((education, index) => (
        <Education key={index} institution={education.institution} degree={education.degree} years={education.years} />
      ))}
    </div>
  );
};

export default Educations;