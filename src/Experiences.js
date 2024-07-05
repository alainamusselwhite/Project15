//Experiences Section

import React from 'react';
import './Styles.css';

const Experience = ({ title, company, duration }) => {
  return (
    <div className="experience">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{duration}</p>
    </div>
  );
};

const Experiences = () => {
  const experiencesData = [
    { title: "Computer Science Intern", company: "Andor Health", duration: "June 2024 - Present" },
    { title: "Data Analyst Intern", company: "Mission & Data", duration: "June 2023 - Present" },
  ];

  return (
    <div className="experiences">
      <h2>Experiences</h2>
      {experiencesData.map((experience, index) => (
        <Experience key={index} title={experience.title} company={experience.company} duration={experience.duration} />
      ))}
    </div>
  );
};

export default Experiences;