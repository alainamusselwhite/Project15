// Skills section
import React from 'react';
import './Styles.css';

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <p>{name}: {level}</p>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { name: "JavaScript", level: "Beginner" },
    { name: "Python", level: "Beginner" },
    { name: "Google Data Studio", level: "Intermediate" },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default Skills;