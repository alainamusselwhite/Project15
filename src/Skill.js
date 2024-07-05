import React from 'react';
import './Styles.css';

const Skill = ({ name, proficiency }) => {
  return (
    <div className="skill">
      <h3>{name}</h3>
      <p>Proficiency: {proficiency}</p>
    </div>
  );
};

export default Skill;
