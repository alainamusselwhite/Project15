import React from 'react';
import './Styles.css';

const Experience = ({ jobTitle, company, duration }) => {
  return (
    <div className="experience">
      <h3>{jobTitle}</h3>
      <p>Company: {company}</p>
      <p>Duration: {duration}</p>
    </div>
  );
};

export default Experience;