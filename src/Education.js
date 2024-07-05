import React from 'react';
import './Styles.css';

const Education = ({ institution, degree, years }) => {
  return (
    <div className="education">
      <h3>{institution}</h3>
      <p>Degree: {degree}</p>
      <p>Years: {years}</p>
    </div>
  );
};

export default Education;